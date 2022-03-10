"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../../domain/User");
const FindAllUsers_1 = require("../../application/usecase/FindAllUsers");
const FindById_1 = require("../../application/usecase/FindById");
const CreateUser_1 = require("../../application/usecase/CreateUser");
const UpdateUser_1 = require("../../application/usecase/UpdateUser");
const DeleteUser_1 = require("../../application/usecase/DeleteUser");
const UserSerializer_1 = require("../serializer/UserSerializer");
const UserRepositoryImpl_1 = require("../database/memory/UserRepositoryImpl");
//import { UserRepository } from "../database/mysql/UserRepositoryImpl";
class UserController {
    constructor(dbConnection) {
        console.log('UserController');
        //this.userRepository = new UserRepository(dbConnection);
        this.userRepository = new UserRepositoryImpl_1.UserRepository();
        this.userSerializer = new UserSerializer_1.UserSerializer();
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UserController findAllUsers');
            const useCase = new FindAllUsers_1.FindAllUsers(this.userRepository);
            let result = yield useCase.execute();
            return this.userSerializer.users(result);
        });
    }
    findById(req
    //): Promise<TResponse<UserResponse> | TResponse<{}>> {
    //): Promise<User | null> {
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('UserController findById: ' + req.params.id);
                const useCase = new FindById_1.FindById(this.userRepository);
                let result = yield useCase.execute(Number(req.params.id));
                //console.log(result);
                return this.userSerializer.user(result);
                //return result;
            }
            catch (error) {
                return this.userSerializer.error(error);
                //return null;
            }
        });
    }
    createUser(req
    //): Promise<User | null> {
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('UserController createUser');
                const useCase = new CreateUser_1.CreateUser(this.userRepository);
                console.log(req.body);
                const user = new User_1.User(req.body.id, req.body.name, req.body.firstname, req.body.lastname, req.body.email);
                let result = yield useCase.execute(user);
                return this.userSerializer.user(result);
                //return useCase.execute(user);
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
    updateUser(req
    //): Promise<User | null> {
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('UserController updateUserById');
                const useCase = new UpdateUser_1.UpdateUser(this.userRepository);
                const user = new User_1.User(req.body.id, req.body.name, req.body.firstname, req.body.lastname, req.body.email);
                //return useCase.execute(user);
                let result = yield useCase.execute(user);
                return this.userSerializer.user(result);
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
    deleteUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('UserController delete');
                const useCase = new DeleteUser_1.DeleteUser(this.userRepository);
                yield useCase.execute(Number(req.params.id));
                return this.userSerializer.delete();
            }
            catch (error) {
                return this.userSerializer.error(error);
            }
        });
    }
}
exports.UserController = UserController;
