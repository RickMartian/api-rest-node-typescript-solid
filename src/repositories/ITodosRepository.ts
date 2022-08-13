import { Todo } from "../entities/Todo";

export interface ITodosRepository {
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo>;
  save(todo: Todo): Promise<void>;
}
