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
    let user = new User(r.id, r.name, r.firstname, r.lastname, r.email);
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
    console.log('Repository createUser ' + user.id + ' ' + user.name);
    await this.connection.execute(
      `insert into Users (id, name, firstname, lastname, email) values ("${user.id}", "${user.name}", "${user.firstname}", "${user.lastname}", "${user.email}")`
      );
    return user;
  }

  public async update(user: User): Promise<User> {
    await this.connection.execute(
      "update Users set name = ?, firstname = ?, lastname = ?, email = ? where id = ?",
      [user.name, user.firstname, user.lastname, user.email, user.id]
      );
    return user;
  }

  public async delete(id: number): Promise<null> {
    await this.connection.execute(
      "delete from Users where id = ?",
      id
      );
    return null;
  }
}

export { UserRepositoryImpl as UserRepository };
