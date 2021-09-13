interface TodoParameters {
  name: string;
  isDone: boolean;
}

export default class Todo {
  name: string;
  isDone: boolean;

  constructor({ name, isDone }: TodoParameters) {
    this.name = name;
    this.isDone = isDone;
  }

  toJson() {
    return {
      name: this.name,
      isDone: this.isDone,
    };
  }

  toMap(): object {
    return {
      name: this.name,
      isDone: this.isDone,
    };
  }
}
