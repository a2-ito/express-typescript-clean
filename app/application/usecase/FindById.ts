import { User } from "../../domain/User"
import { UserRepositoryInterface } from "../../interface/database/repository/UserRepositoryInterface";

class FindById {
  private userRepository: UserRepositoryInterface;

  public constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public execute(id: number): Promise<User | null> {
    console.log('usecase FindById: ' + id);
    return this.userRepository.findById(id);
  }
}

export { FindById };
