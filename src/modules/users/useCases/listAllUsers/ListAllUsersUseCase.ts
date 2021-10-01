import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const res = this.usersRepository.findById(user_id);
    if (res.admin === false) {
      throw new Error(
        "should not be able to a non existing user get list of all users"
      );
    }
    const usersList = this.usersRepository.list();

    return usersList;
  }
}

export { ListAllUsersUseCase };
