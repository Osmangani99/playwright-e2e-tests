import { test, expect, request } from "@playwright/test";
import { log } from "../helpers/logger";
import constants from "../../data/constants.json";
import TestData from "../../data/test-data";
import fileHelper from "../helpers/file-helper";

test.describe("REST API DEMO", () => {

  let envConfig = undefined
  test.beforeEach("Get the env config", async({request},testInfo) => {
    envConfig = testInfo.project.use as any;

  } )

  //TODO: goes to env config file we resolve on top ⬆️
  // const BaseURL = "https://reqres.in/api";

  //Make a GET call
  test("Should get list of users", async ({ request }) => {
    await log("info", `Making a GET call to get list of users ${envConfig.apiURL}`);
    // TODO: goes to constants file [DONE ⬇️]
    // The url is came from your constants.json ⬇️
    const response = await request.get(`${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.GET_USERS_LIST}`, {
      headers: {

        // TODO: goes to .env [ DONE ⬇️]
        "x-api-key": process.env.RES_RES_API_KEY
      },
    });

    // Assert the status code
    expect(response.status()).toBe(200);
    await log("info", `The GET call is successful with ${response.status()}`);

    // Get list of users
    const userData = await response.json();
    log("info", `List of users: ${JSON.stringify(userData)}`);

    // write the list of users to a file
    fileHelper.writeFile(`${process.cwd()}/data/api-responses/list-of-users.json`,`${JSON.stringify(userData,undefined,4)}`);

  });


  // Make a POST call
  test("Should create a user", async ({ request }) => {
    await log("info", `Making a POST call users ${envConfig.apiURL}`);

    // This is the POST call body we are using ( data: payload) as payload in the call 
    //TODO: goe to test data file
    const payload = TestData.apiUserCreation()[0];

    // We user this payload in the POST call which is replace on the top ⬆️
    // const payload = {
    //   name: "Osman Gani",
    //   job: "leader",
    // };

    // The url is came from your constants.json ⬇️
    const response = await request.post(`${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.POST_USER}`, {
      headers: {
        "x-api-key": process.env.RES_RES_API_KEY,
        "Content-Type": "application/json",
      },
      data: payload,
    });

    // Assert the status code
    expect(response.status()).toBe(201);
    await log("info", `The POST call is successful with ${response.status()}`);

    // Get list of users
    const createUserResponseData = await response.json();
    log("info", `response data from the POST call: ${JSON.stringify(createUserResponseData)}`);
  });
});



/**
 * var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://reqres.in/api/users',
  'headers': {
    'x-api-key': 'free_user_3LUaydBH8AWvv3SQd2fazYN5Kip',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Osman Gani",
    "job": "leader"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

 */

/**
 * var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://reqres.in/api/users?page=2',
  'headers': {
    'x-api-key': 'free_user_3LUaydBH8AWvv3SQd2fazYN5Kip'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

 */
