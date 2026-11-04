import fs from "fs";
import { parse } from "csv-parse/sync";
import { log } from "../../tests/helpers/logger";

/**
 *  Here we created reuseable function to read csv file for test as test data
 * @param filepath
 * @returns Array of object
 */
function readCSV(filepath: string): any {
  // Read the file
  const csvDataStr = fs.readFileSync(filepath, { encoding: "utf-8" });

  // Parse the csv data -> Array of data (install csv-parse)
  const csvDataArray = parse(csvDataStr, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
  return csvDataArray;
}

// This function reads a file from the given file path and returns its content as a string. If the file does not exist, it throws an error.
function readFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    throw new Error(`No file exists with given name: ${filePath}`);
  }
  log("info", `Reading file: ${filePath}...`);
  let data = fs.readFileSync(filePath, "utf-8");
  return data;
}

function writeFile(filePath: string, data: string) {
  try {
    fs.writeFileSync(filePath, data);
    log("info", `Writing file: ${filePath}...`);
  } catch (err) {
    new Error(`Error writing to: ${filePath} - ${err}`);
  }
}

export default { readCSV, readFile, writeFile };
