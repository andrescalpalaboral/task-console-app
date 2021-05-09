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

  get listArray() {
    const listResult = [];
    Object.keys(this._list).forEach((item) => {
      const task = this._list[item];
      listResult.push(task);
    });

    return listResult;
  }
}

module.exports = Tasks;
