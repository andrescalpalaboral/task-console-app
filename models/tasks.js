const Task = require("./task");

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  addTask(description) {
    const newTask = new Task(description);
    this._list[newTask.id] = newTask;
  }
}

module.exports = Tasks;
