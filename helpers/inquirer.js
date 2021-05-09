const inquirer = require("inquirer");
require("colors");

const menuQuestion = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Create task`,
      },
      {
        value: "2",
        name: `${"2.".green} List tasks`,
      },
      {
        value: "3",
        name: `${"3.".green} List completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".green} List pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".green} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
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
      if (value === 0) return "Please enter a value";
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
