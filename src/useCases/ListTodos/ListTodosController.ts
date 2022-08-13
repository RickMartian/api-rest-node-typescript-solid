import { Request, Response } from "express";
import { ListTodosUseCase } from "./ListTodosUseCase";

export class ListTodosController {
  constructor(private listTodosUseCase: ListTodosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const todos = this.listTodosUseCase.execute();

      return response.status(200).json({
        todos,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
