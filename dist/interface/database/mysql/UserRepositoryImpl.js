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
exports.UserRepository = void 0;
const User_1 = require("../../../domain/User");
const UserRepositoryInterface_1 = require("../repository/UserRepositoryInterface");
class UserRepositoryImpl extends UserRepositoryInterface_1.UserRepositoryInterface {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convert(r) {
        let user = new User_1.User(r.id, r.name, r.firstname, r.lastname, r.email);
        return user;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository findAll');
            let queryResults = yield this.connection.execute("select * from Users");
            const results = queryResults.map((m) => {
                return this.convert(m);
            });
            return results;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute("select * from Users where id = ? limit 1", id);
            return this.convert(queryResults[0]);
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository createUser ' + user.id + ' ' + user.name);
            yield this.connection.execute(`insert into Users (id, name, firstname, lastname, email) values ("${user.id}", "${user.name}", "${user.firstname}", "${user.lastname}", "${user.email}")`);
            return user;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute("update Users set name = ?, firstname = ?, lastname = ?, email = ? where id = ?", [user.name, user.firstname, user.lastname, user.email, user.id]);
            return user;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute("delete from Users where id = ?", id);
            return null;
        });
    }
}
exports.UserRepository = UserRepositoryImpl;
