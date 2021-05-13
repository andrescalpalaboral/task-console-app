require("colors");
const {
  inquirerMenu,
  pause,
  readInput,
  listOfTaskToDelete,
  confirmAction,
  listOfTaskToComplete,
} = require("./helpers/inquirer");
const Tasks = require("./models/tasks");
const { generateJsonFile, readJsonFile } = require("./utils/fileGenerator");

const filePath = "./db/data.json";
console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const tasksFile = readJsonFile(filePath);

  if (tasksFile) {
    tasks.loadTasksToFile(tasksFile);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const description = await readInput("Description:");
        tasks.addTask(description);
        break;

      case "2":
        tasks.listTasksInTableMark();
        break;

      case "3":
        tasks.listTasksCompletedOrPending();
        break;

      case "4":
        tasks.listTasksCompletedOrPending(false);
        break;

      case "5":
        const ids = await listOfTaskToComplete(tasks.listArray);
        tasks.toggleTasks(ids);
        break;

      case "6":
        const id = await listOfTaskToDelete(tasks.listArray);
        if (id !== "0") {
          const confirm = await confirmAction();
          if (confirm) {
            tasks.deleteTask(id);
            console.log("Task deleted");
          }
        }
        break;
    }

    generateJsonFile(filePath, tasks.listArray);
    await pause();
  } while (opt !== "0");
};

main();
