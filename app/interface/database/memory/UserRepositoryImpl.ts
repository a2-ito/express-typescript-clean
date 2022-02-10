import  DB from "./Database";
import { User } from "../../../domain/User";
import { UserRepositoryInterface } from "../repository/UserRepositoryInterface";

class UserRepositoryImpl extends UserRepositoryInterface {
  public constructor() {
    super();
    const user1 = new User(1, "sample1");
    const user2 = new User(2, "sample2");
    DB.users = [user1, user2];
  }

  private convert(r: User) {
    let user = new User(r.id, r.name);
    return user;
  }

  public async findAll(): Promise<User[]> {
    //console.log('Repository findAll');
    let queryResults = DB.users;
    const results = queryResults.map(
      (m): User => {
        return this.convert(m);
      }
    );
    return results;
  }

  public async findById(id: number): Promise<User | null> {
    console.log('Repository findById');
    let queryResults = DB.users.filter((user):boolean => user.id === id);
    if (queryResults.length === 0) {
      return null;
    }
    return this.convert(queryResults[0]);
  };

  public async create(user: User): Promise<User> {
    const userIds = DB.users.map((user): number => user.id);
    const maxId: number = Math.max.apply(null, userIds);
    const newId = maxId + 1;
    const newUser = new User(newId, user.name);
    DB.users.push(newUser);
    return newUser;
  };

  public async update(user: User): Promise<User> {
    let returnUser: User;

    DB.users = DB.users.map(
      (tu): User => {
        if (tu.id === user.id) {
          let name;
          if (user.id) {
            name = user.id;
          }
          returnUser = user;
          return returnUser;
        } else {
          return tu;
        }
      }
    );
    return user;
  };

  public async delete(id: number): Promise<null> {
    console.log('Repository delete');
    DB.users = DB.users.filter(
      (user): boolean => {
        return user.id !== id;
      }
    );
    return null;
  };

}

export { UserRepositoryImpl as UserRepositoryonMemory };
