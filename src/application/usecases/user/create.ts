import { IUserRepository } from "../../../domain/interfaces/user_inteface_repository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
