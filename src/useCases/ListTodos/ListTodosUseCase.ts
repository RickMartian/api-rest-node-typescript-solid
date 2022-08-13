import { ITodosRepository } from "../../repositories/ITodosRepository";

export class ListTodosUseCase {
  constructor(private todoRepository: ITodosRepository) {}

  async execute() {
    const todos = await this.todoRepository.findAll();
    return todos;
  }
}
