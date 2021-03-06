import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers
    try {
      if(!(typeof user_id === 'string')) throw new Error('Irregular user id type')
      const users = this.listAllUsersUseCase.execute({user_id})

      return response.status(201).json(users)
    }catch(error){
      return response.status(400).json({error})
    }
  }
}

export { ListAllUsersController };
