import * as fs from "fs";

function readFileToString(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  } catch (error) {
    // Handle errors, e.g., file not found
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
}

function parseWeekStringToJson(fileContent) {
  const title = fileContent.split("\n")[0];

  const regex = /^[A-Z\s]+$(?:(?!^[A-Z\s]+$)[\s\S])*/gm;

  const matches = fileContent.match(regex);
  console.log(matches);

  const runs = [];
  matches.forEach((element) => {
    const lines = element.split("\n");
    const runType = lines[0];
    const runTitle = lines[1].match(/:(.*)$/)[1].trim();
    const candidateFirstItem = lines[2].match(/\d.*$/);
    const runSubtype = candidateFirstItem ? undefined : lines[2];
    const items = runSubtype ? lines.slice(3) : lines.slice(2);
    runs.push({ runType, runTitle, runSubtype, items });
  });

  return runs;
}

export function parseFile(filePath) {
  const content = readFileToString(filePath.join("/"));

  const title = content.split("\n")[0];

  const runs = parseWeekStringToJson(content);

  const obj = { title, runs };

  // Write to json file
  const outputFilename = title.replace(/\s+/g, "-") + ".json";
  const outputFilepath = filePath.slice(0, -1).join("/") + "/" + outputFilename;
  const outputContent = JSON.stringify(obj, null, 2);
  fs.writeFile(outputFilepath, outputContent, (err) => {
    if (err) {
      console.error("Error writing to file", outputFilepath);
    } else {
      console.log("Success writing to file", outputFilepath);
    }
  });
}

// parseFile(["5k", "01-WEEKS-TO-GO.txt"]);
