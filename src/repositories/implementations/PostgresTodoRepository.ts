import { Todo } from "../../entities/Todo";
import { ITodosRepository } from "../ITodosRepository";

export class PostgresTodoRepository implements ITodosRepository {
  private todos: Todo[] = [];
  async findAll(): Promise<Todo[]> {
    console.log(this.todos);
    const todos = await Promise.resolve(this.todos);
    return todos;
  }
  findById(id: string): Promise<Todo> {
    const todo = this.todos.find((todo) => todo.id === id);

    return todo;
  }
  save(todo: Todo): Promise<void> {
    this.todos.push(todo);
  }
}
