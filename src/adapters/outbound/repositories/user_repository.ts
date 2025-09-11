import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/interfaces/user_inteface_repository";

export class UserRepository implements IUserRepository {
  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  updateById(id: string, user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  read(): Promise<User[]> {
    throw new Error("Method not implemented");
  }

  readOne(id: string): Promise<User> {
    throw new Error("Method not implemented");
  }

  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
