import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list()
    const userAdmin = this.usersRepository.findById(user_id)

    if(!userAdmin) {
      throw new Error('User not Exists!')
    }

    if(userAdmin.admin === false) {
      throw new Error('User is not admin')
    }
    return users
  }
}

export { ListAllUsersUseCase };
