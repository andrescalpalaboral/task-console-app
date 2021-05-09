const inquirer = require("inquirer");
require("colors");

const menuQuestion = [
  {
    type: "list",
    name: "option",
    message: "What wold you like to do?",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const confirmation = {
  type: "input",
  name: "confirmation",
  message: `Press ${"ENTER".blue} to confirm`,
};

const inquirerMenu = async () => {
  console.log("=======================".green);
  console.log("   Choose an option    ".green);
  console.log("=======================\n".green);

  const { option } = await inquirer.prompt(menuQuestion);

  return option;
};

const pause = async () => {
  await inquirer.prompt(confirmation);
};

const readInput = async (message) => {
  const question = {
    type: "input",
    name: "description",
    message,
    validate(value) {
      if (value === 0) return "Por favor ingrese un valor";
      return true;
    },
  };

  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
