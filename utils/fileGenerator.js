const fs = require("fs");

const generateJsonFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = generateJsonFile;
