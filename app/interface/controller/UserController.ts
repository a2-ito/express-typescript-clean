import express from 'express'
import { User } from "../../domain/User";
import { FindAllUsers } from "../../application/usecase/FindAllUsers";
import { FindById } from "../../application/usecase/FindById";
import { CreateUser } from "../../application/usecase/CreateUser";
import { DeleteUser } from "../../application/usecase/DeleteUser";

import {
  //TFindUserRequest,
  FindUserRequest
} from "../request/FindUserRequest";

import { TResponse } from "../serializer/ApplicationSerializer";
import { UserSerializer, UserResponse } from "../serializer/UserSerializer";

import { UserRepositoryonMemory } from "../database/memory/UserRepositoryImpl";
import { UserRepositoryonMysql } from "../database/mysql/UserRepositoryImpl";

class UserController {
  private userRepository: UserRepositoryonMemory;

  public constructor() {
    this.userRepository = new UserRepositoryonMemory();
  }

  public findAllUsers() {
    //console.log('UserController findAllUsers');
    const useCase = new FindAllUsers(this.userRepository);
    return useCase.execute();
  }

  public findById(
    req: express.Request
  ): Promise<User | null> {
    console.log('UserController findById');
    const useCase = new FindById(this.userRepository);
    return useCase.execute(Number(req.params.id));
  }

  public createUser(
    req: express.Request
  ): Promise<User | null> {
    console.log('UserController createUser');
    const useCase = new CreateUser(this.userRepository);
    console.log(req.body);
    const user = new User(req.body.id, req.body.name);
    return useCase.execute(user);
  }

  public delete(
    req: express.Request
  ): Promise<null> {
    console.log('UserController delete');
    const useCase = new DeleteUser(this.userRepository);
    return useCase.execute(Number(req.params.id));
  }

}

export { UserController };
