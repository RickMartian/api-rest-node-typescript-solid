import { PostgresTodoRepository } from "../../repositories/implementations/PostgresTodoRepository";
import { ListTodosController } from "./ListTodosController";
import { ListTodosUseCase } from "./ListTodosUseCase";

const todoRepository = new PostgresTodoRepository();

const listTodosUseCase = new ListTodosUseCase(todoRepository);

const listTodosController = new ListTodosController(listTodosUseCase);

export { listTodosController, listTodosUseCase };
