import fs from "fs";
import { parse } from "csv-parse/sync";

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

export default {readCSV};
