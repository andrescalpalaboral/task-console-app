require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");
const generateJsonFile = require("./utils/fileGenerator");

const filePath = "./db/data.json";
console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const description = await readInput("Description:");
        tasks.addTask(description);
        break;

      case "2":
        console.log(tasks.listArray);
        break;
    }

    generateJsonFile(filePath, tasks.listArray);
    await pause();
  } while (opt !== "0");
};

main();
