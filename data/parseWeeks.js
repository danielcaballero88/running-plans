import { parseFile } from "./parseWeek.js";
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

// Usage example
readDirectoryAndFilterTxtFiles("5k")
  .then((txtFiles) => {
    console.log("List of .txt files:");
    console.log(txtFiles);

    // You can access txtFiles here or pass it to another function
    txtFiles.forEach((filename) => {
      parseFile(["5k", filename]);
    });
  })
  .catch((err) => {
    // Handle errors from the promise chain
    console.error(`Error in promise chain: ${err.message}`);
  });
