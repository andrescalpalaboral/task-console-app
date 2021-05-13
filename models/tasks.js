const Task = require("./task");
const tablemark = require("tablemark");

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  loadTasksToFile(fileData) {
    fileData.forEach((item) => {
      this._list[item.id] = item;
    });
  }

  addTask(description) {
    const newTask = new Task(description);
    this._list[newTask.id] = newTask;
  }

  listTasksInTableMark() {
    console.log(tablemark(this.listArray));
  }

  listTasksCompletedOrPending(completed = true) {
    let result = [];
    if (completed) {
      result = this.listArray.filter((task) => task.createdAt);
    } else {
      result = this.listArray.filter((task) => !task.createdAt);
    }

    console.log(tablemark(result));
  }

  deleteTask(id = "") {
    if (this._list[id]) delete this._list[id];
  }

  toggleTasks(ids = []) {
    this.listArray.forEach((task) => {
      if (ids.includes(task.id)) {
        task.createdAt = new Date().toISOString();
      } else {
        task.createdAt = null;
      }
    });
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
