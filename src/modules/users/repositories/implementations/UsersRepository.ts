import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const findedId = this.users.find((find) => find.id === id);

    return findedId;
  }

  findByEmail(email: string): User | undefined {
    const findedemail = this.users.find((mail) => mail.email === email);

    return findedemail;
  }

  turnAdmin(receivedUser: User): User {
    const userAdmin = Object.assign(receivedUser, {
      admin: true,
    });

    return userAdmin;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
