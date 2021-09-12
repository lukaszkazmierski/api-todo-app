class Todo {
  name;
  isDone;

  constructor(name, isDone) {
    this.name = name;
    this.isDone = isDone;
  }

  toJson() {
    return {
      name: this.name,
      isDone: this.isDone,
    };
  }
}

module.exports = Todo;
