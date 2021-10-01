import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <{ user_id: string }>request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(users);
    } catch (err) {
      const error = { error: "deu erro" };
      return response.status(400).send(error);
    }
  }
}

export { ListAllUsersController };
