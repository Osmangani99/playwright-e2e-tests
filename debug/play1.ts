import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

/**
 * ### How to use .csv file for test data
1. Create a `.csv` file 
2. Read the file with native `fs` module
3. Parse the csv data -> Array of data (install csv- parse) 
4. console out the data 
5. Done! 

 */

// Read the file with native `fs` module
const csvFilePath = path.resolve(
  `${process.cwd()}/data/functional/make-aptmnt-test-data.csv`
);
const csvDataStr = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

//console.log(csvDataStr);
//console.log(typeof csvDataStr);

const csvDataArry = parse(csvDataStr, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

// console.log(csvDataArry);

// as per the test the above code is working. Now time to make code as reuse able function.
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

// Unit test 
const filepath = path.resolve(`${process.cwd()}/data/functional/make-aptmnt-test-data.csv`);
const csvData = readCSV(filepath)

console.log(csvData);
console.log(csvData[1].facility);