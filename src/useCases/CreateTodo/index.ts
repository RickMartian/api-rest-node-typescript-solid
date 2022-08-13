import { GMailMailProvider } from "../../providers/implementations/GMailMailProvider";
import { PostgresTodoRepository } from "../../repositories/implementations/PostgresTodoRepository";
import { CreateTodoUseCase } from "./CreateTodoUseCase";
import { CreateTodoController } from "./CreateUserController";

const gmailMailProvider = new GMailMailProvider();
const postgresTodoRepository = new PostgresTodoRepository();

const createTodoUseCase = new CreateTodoUseCase(
  postgresTodoRepository,
  gmailMailProvider
);

const createTodoController = new CreateTodoController(createTodoUseCase);

export { createTodoUseCase, createTodoController };
