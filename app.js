require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const description = await readInput("Descripción:");
        tasks.addTask(description);
        break;

      case "2":
        console.log(tasks);
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
