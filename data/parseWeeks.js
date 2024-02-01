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
  txtFiles.forEach((filename) => {
    const jsonFilepath = parseFile(["5k", filename]);
    jsonFiles.push(jsonFilepath);
  });
  return jsonFiles;
}

async function loadJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    throw new Error(`Error reading or parsing JSON file: ${error.message}`);
  }
}

function joinJsonInOneFile(jsonFiles) {
  // Join all json files into a single file
  const planData = [];
  jsonFiles.reverse().forEach(async (filepath) => {
    console.log(filepath);
    // const content = readFileToString(filepath);
    const weekData = await loadJsonFile(filepath);
    planData.push(weekData);
    // Write to json file
    const outputFilepath = path.join("5k", "plan.json");
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

const txtFiles = await readDirectoryAndFilterTxtFiles("5k");
const jsonFiles = parseTxtFilesToJson(txtFiles);

joinJsonInOneFile(jsonFiles);

// // Usage example
// readDirectoryAndFilterTxtFiles("5k")
//   .then((txtFiles) => {
//     // Parse each file to json
//     console.log("List of .txt files:");
//     console.log(txtFiles);

//     // You can access txtFiles here or pass it to another function
//     const jsonFiles = [];
//     txtFiles.forEach((filename) => {
//       const jsonFilepath = parseFile(["5k", filename]);
//       jsonFiles.push(jsonFilepath);
//     });
//     return jsonFiles
//   })
//   .then(jsonFiles => {
//     // Join all json files into a single file
//     const planData = [];
//     jsonFiles.forEach(filepath => {
//       console.log(filepath);
//       const content = readFileToString(filepath);
//       const weekData = JSON.parse(content);
//       planData.push(weekData);
//       // Write to json file
//       const outputFilepath = path.join("5k", "plan.json");
//       const outputContent = JSON.stringify(planData, null, 2);
//       fs.writeFile(outputFilepath, outputContent, (err) => {
//         if (err) {
//           console.error("Error writing to file", outputFilepath);
//         } else {
//           console.log("Success writing to file", outputFilepath);
//         }
//       });
//     });
//   })
//   .catch((err) => {
//     // Handle errors from the promise chain
//     console.error(`Error in promise chain: ${err.message}`);
//   });
