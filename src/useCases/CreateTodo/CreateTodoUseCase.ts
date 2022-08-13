import { Todo } from "../../entities/Todo";
import { IMailProvider } from "../../providers/IMailProvider";
import { ITodosRepository } from "../../repositories/ITodosRepository";
import { ICreateTodoRequestDTO } from "./CreateTodoDTO";

export class CreateTodoUseCase {
  constructor(
    private todoRepository: ITodosRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: ICreateTodoRequestDTO) {
    const todo = new Todo(data);

    await this.todoRepository.save(todo);
    await this.mailProvider.sendMail({
      to: {
        name: process.env.MOKED_USER_NAME as string,
        email: process.env.MOKED_USER_EMAIL as string,
      },
      from: {
        name: process.env.MOKED_USER_NAME as string,
        email: process.env.MOKED_USER_EMAIL as string,
      },
      subject: "New todo created!",
      body: `<h2>Hey, a new todo was <strong>created!</strong></h2>
        <h3><strong>Todo details</strong></h3>
        <ul>
        <li>
        <span><strong>Title: </strong> ${data.title}</span>
        </li>
        <li>
        <span><strong>Done: </strong> ${data.done ? "yep" : "nop"}</span>
        </li>
        <li>
        <span><strong>Start date: </strong> ${data.start_date || "none"}</span>
        </li>
        <li>
        <span><strong>End date: </strong> ${data.end_date || "none"}</span>
        </li>
        <li>
        <span><strong>Deleted: </strong> ${data.deleted ? "yep" : "nop"}</span>
        </li>
        </ul>`,
    });
  }
}
