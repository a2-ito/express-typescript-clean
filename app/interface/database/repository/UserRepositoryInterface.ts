import { User } from "../../../domain/User";

abstract class UserRepositoryInterface {
  abstract findAll(): Promise<User[]>;
  abstract findById(id: number): Promise<User | null>;
  abstract create(user: User): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: number): Promise<null>;
}

export { UserRepositoryInterface };
