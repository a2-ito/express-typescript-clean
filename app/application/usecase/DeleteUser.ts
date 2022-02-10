import { User } from "../../domain/User"
import { UserRepositoryInterface } from "../../interface/database/repository/UserRepositoryInterface";

class DeleteUser {
  private userRepository: UserRepositoryInterface;

  public constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public execute(id: number): Promise<null> {
    console.log('usecase FindById');
    return this.userRepository.delete(id);
  }
}

export { DeleteUser };
