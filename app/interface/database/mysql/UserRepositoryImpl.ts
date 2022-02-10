import { User } from "../../../domain/User";
import { UserRepositoryInterface } from "../repository/UserRepositoryInterface";
import { IDBConnection } from "./IDBConnection";

class UserRepositoryImpl extends UserRepositoryInterface {
  private connection: IDBConnection;

  public constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  private convert(r: User) {
    let user = new User(r.id, r.name);
    return user;
  }

  public async findAll(): Promise<User[]> {
    console.log('Repository findAll');
    let queryResults: User[] = await this.connection.execute(
      "select * from Users"
    );
    const results = queryResults.map(
      (m): User => {
        return this.convert(m);
      }
    );
    return results;
  }

  public async findById(id: number): Promise<User | null> {
    let queryResults = await this.connection.execute(
      "select * from Users where id = ? limit 1",
      id
    );
    return this.convert(queryResults[0]);
  }

  public async create(user: User): Promise<User> {
    await this.connection.execute(
      `insert into Users (id, name) values ("${user.id}", "${user.name}")`
      );
    return user;
  }

  public async update(user: User): Promise<User> {
    return user;
  }

  public async delete(id: number): Promise<null> {
    return null;
  }
}

export { UserRepositoryImpl as UserRepositoryonMysql };
