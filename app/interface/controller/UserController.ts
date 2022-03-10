import express from 'express'
import { User } from "../../domain/User";
import { FindAllUsers } from "../../application/usecase/FindAllUsers";
import { FindById } from "../../application/usecase/FindById";
import { CreateUser } from "../../application/usecase/CreateUser";
import { UpdateUser } from "../../application/usecase/UpdateUser";
import { DeleteUser } from "../../application/usecase/DeleteUser";
import { IDBConnection } from "../database/mysql/IDBConnection";

import {
  //TFindUserRequest,
  FindUserRequest
} from "../request/FindUserRequest";

import { TResponse } from "../serializer/ApplicationSerializer";
import { UserSerializer, UserResponse } from "../serializer/UserSerializer";

import { UserRepository } from "../database/memory/UserRepositoryImpl";
//import { UserRepository } from "../database/mysql/UserRepositoryImpl";

class UserController {
  private userRepository: UserRepository;
  private userSerializer: UserSerializer;

  public constructor(dbConnection: IDBConnection) {
    console.log('UserController');
    //this.userRepository = new UserRepository(dbConnection);
    this.userRepository = new UserRepository();
    this.userSerializer = new UserSerializer();
  }

  public async findAllUsers(): Promise<TResponse<UserResponse[]> | TResponse<{}>> {
    console.log('UserController findAllUsers');
    const useCase = new FindAllUsers(this.userRepository);
    let result = await useCase.execute();
    return this.userSerializer.users(result);
  }

  public async findById(
    req: express.Request
    //): Promise<TResponse<UserResponse> | TResponse<{}>> {
    //): Promise<User | null> {
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      console.log('UserController findById: ' + req.params.id);
      const useCase = new FindById(this.userRepository);
      let result = await useCase.execute(Number(req.params.id));
      //console.log(result);
      return this.userSerializer.user(result);
      //return result;
    } catch (error: any) {
      return this.userSerializer.error(error);
      //return null;
    }
  }

  public async createUser(
    req: express.Request
    //): Promise<User | null> {
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      console.log('UserController createUser');
      const useCase = new CreateUser(this.userRepository);
      console.log(req.body);
      const user = new User(req.body.id, req.body.name, req.body.firstname, req.body.lastname, req.body.email);
      let result = await useCase.execute(user);
      return this.userSerializer.user(result);
      //return useCase.execute(user);
    } catch (error: any) {
      return this.userSerializer.error(error);
    }
  }

  public async updateUser(
    req: express.Request
    //): Promise<User | null> {
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      console.log('UserController updateUserById');
      const useCase = new UpdateUser(this.userRepository);
      const user = new User(req.body.id, req.body.name, req.body.firstname, req.body.lastname, req.body.email);
      //return useCase.execute(user);
      let result = await useCase.execute(user);
      return this.userSerializer.user(result);
    } catch (error: any) {
      return this.userSerializer.error(error);
    }
  }

  public async deleteUser(
    req: express.Request
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      console.log('UserController delete');
      const useCase = new DeleteUser(this.userRepository);
      await useCase.execute(Number(req.params.id));
      return this.userSerializer.delete();
    } catch (error: any) {
      return this.userSerializer.error(error);
    }
  }

}

export { UserController };
