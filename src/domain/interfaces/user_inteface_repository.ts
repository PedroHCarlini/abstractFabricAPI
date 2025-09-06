import { User } from "../entities/user";

export interface IUserRepository {
  create(user: User): Promise<User>;
  read(): Promise<User[]>;
  readOne(id: string): Promise<User>;
  updateById(id: string, user: User): Promise<User>;
  deleteById(id: string): Promise<void>;
}
