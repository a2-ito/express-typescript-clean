import { User } from "../../domain/User"
import { UserRepositoryInterface } from "../../interface/database/repository/UserRepositoryInterface";

class FindAllUsers {
  private userRepository: UserRepositoryInterface;

  public constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public execute(): Promise<User[]> {
    //console.log('usecase FindAllUsers');
    return this.userRepository.findAll();
  }
}

export { FindAllUsers };
