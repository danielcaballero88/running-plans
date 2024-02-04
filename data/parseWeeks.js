import { parseFile, readFileToString } from "./parseWeek.js";
import * as fs from "fs/promises";
import * as path from "path";

async function readDirectoryAndFilterTxtFiles(directoryPath) {
  try {
    // Read the contents of the directory
    const files = await fs.readdir(directoryPath);

    // Filter for .txt files
    const txtFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".txt",
    );

    return txtFiles;
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
    throw err; // Propagate the error
  }
}

function parseTxtFilesToJson(txtFiles) {
  // Parse each file to json
  const jsonFiles = [];
  txtFiles.forEach((filepath) => {
    const jsonFilepath = parseFile(filepath.split(path.sep));
    jsonFiles.push(jsonFilepath);
  });
  return jsonFiles;
}

async function loadJsonFile(filepath) {
  try {
    const data = await fs.readFile(filepath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    throw new Error(`Error reading or parsing JSON file: ${error.message}`);
  }
}

function joinJsonInOneFile(dir, jsonFiles) {
  // Join all json files into a single file
  const planData = [];
  jsonFiles.reverse().forEach(async (filepath) => {
    console.log(filepath);
    // const content = readFileToString(filepath);
    const weekData = await loadJsonFile(filepath);
    planData.push(weekData);
    // Write to json file
    const outputFilepath = path.join(dir, "plan.json");
    const outputContent = JSON.stringify(planData, null, 2);
    fs.writeFile(outputFilepath, outputContent, (err) => {
      if (err) {
        console.error("Error writing to file", outputFilepath);
      } else {
        console.log("Success writing to file", outputFilepath);
      }
    });
  });
}

const dirToProcess = "21k";
const txtFiles = await readDirectoryAndFilterTxtFiles(dirToProcess);
const txtFilesPaths = txtFiles.reverse().map((x) => path.join(dirToProcess, x));
console.log(txtFilesPaths);
const jsonFiles = parseTxtFilesToJson(txtFilesPaths);
// console.log(jsonFiles);
console.log(jsonFiles.reverse());
joinJsonInOneFile(dirToProcess, jsonFiles);
