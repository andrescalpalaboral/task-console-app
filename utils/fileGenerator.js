const fs = require("fs");

const generateJsonFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const fileData = fs.readFileSync(filePath, { encoding: "utf-8" });
  const fileJson = JSON.parse(fileData);

  return fileJson;
};

module.exports = { generateJsonFile, readJsonFile };
