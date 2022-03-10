import  DB from "./Database";
import { User } from "../../../domain/User";
import { UserRepositoryInterface } from "../repository/UserRepositoryInterface";

class UserRepositoryImpl extends UserRepositoryInterface {
  public constructor() {
    super();
    const user1 = new User(1, "sample1", "sample1_firstname", "sample1_lastname", "sample1@example.com");
    const user2 = new User(2, "sample2", "sample1_firstname", "sample2_lastname", "sample2@example.com");
    DB.users = [user1, user2];
  }

  private convert(r: User) {
    let user = new User(r.id, r.name, r.firstname, r.lastname, r.email);
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
    for (var k in DB.users) {
      console.log(k, DB.users[k]);
    }
    let queryResults = DB.users.filter((user):boolean => user.id === id);
    if (queryResults.length === 0) {
      return null;
    }
    console.log('Repository findById: ' + queryResults[0].id);
    for (var k in queryResults[0]) {
      console.log(k, queryResults[0]);
    }
    return this.convert(queryResults[0]);
  };

  public async create(user: User): Promise<User> {
    console.log('Repository createUser ' + user.email);
    const userIds = DB.users.map((user): number => user.id);
    const maxId: number = Math.max.apply(null, userIds);
    const newId = maxId + 1;
    const newUser = new User(newId, user.name, user.firstname, user.lastname, user.email);
    DB.users.push(newUser);
    return newUser;
  };

  public async update(user: User): Promise<User> {
    console.log('Repository updateUser');
    let returnUser: User;

    DB.users = DB.users.map(
      (tu): User => {
        console.log(tu.id + ' ' + tu.name);
        console.log(tu.id);
        if (tu.id === user.id) {
          let name;
          console.log('update -> ' + tu.id);
          if (user.name) {
            tu.name = user.name;
          }
          return tu;
        } else {
          return tu;
        }
      });
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

export { UserRepositoryImpl as UserRepository };
