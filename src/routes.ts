import { Router } from "express";
import { createTodoController } from "./useCases/CreateTodo";
import { listTodosController } from "./useCases/ListTodos";

const router = Router();

router.post("/todos", (request, response) => {
  return createTodoController.handle(request, response);
});

router.get("/todos", (request, response) => {
  return listTodosController.handle(request, response);
});

export { router };
