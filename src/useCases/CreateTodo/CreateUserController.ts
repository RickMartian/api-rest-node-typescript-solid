import { Request, Response } from "express";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

export class CreateTodoController {
  constructor(private createTodoUseCase: CreateTodoUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, done, start_date, end_date, deleted } = request.body;

    try {
      await this.createTodoUseCase.execute({
        title,
        done,
        start_date,
        end_date,
        deleted,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
