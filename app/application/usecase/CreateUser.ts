import { User } from "../../domain/User";
import { UserRepositoryInterface } from "../../interface/database/repository/UserRepositoryInterface";

class CreateUser {
  private userRepository: UserRepositoryInterface;

  public constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public execute(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}

export { CreateUser };
