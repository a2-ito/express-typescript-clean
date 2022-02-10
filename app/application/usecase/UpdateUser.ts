import { User } from "../../domain/User"
import { UserRepositoryInterface } from "../../interface/database/repository/UserRepositoryInterface";

class UpdateUser {
  private userRepository: UserRepositoryInterface;

  public constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public execute(user: User): Promise<User> {
    console.log('usecase Update');
    return this.userRepository.update(user);
  }
}

export { UpdateUser };
