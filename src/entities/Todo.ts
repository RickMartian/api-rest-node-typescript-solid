import { v4 } from "uuid";

export class Todo {
  public readonly id: string;

  public title: string;
  public done: boolean;
  public start_date: string;
  public end_date: string;
  public deleted: boolean;

  constructor(props: Omit<Todo, "id">, id?: string) {
    Object.assign(this, props);
    this.id = id ?? v4();
  }
}
