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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const Database_1 = __importDefault(require("./Database"));
const User_1 = require("../../../domain/User");
const UserRepositoryInterface_1 = require("../repository/UserRepositoryInterface");
class UserRepositoryImpl extends UserRepositoryInterface_1.UserRepositoryInterface {
    constructor() {
        super();
        const user1 = new User_1.User(1, "sample1", "sample1_firstname", "sample1_lastname", "sample1@example.com");
        const user2 = new User_1.User(2, "sample2", "sample1_firstname", "sample2_lastname", "sample2@example.com");
        Database_1.default.users = [user1, user2];
    }
    convert(r) {
        let user = new User_1.User(r.id, r.name, r.firstname, r.lastname, r.email);
        return user;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log('Repository findAll');
            let queryResults = Database_1.default.users;
            const results = queryResults.map((m) => {
                return this.convert(m);
            });
            return results;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository findById');
            for (var k in Database_1.default.users) {
                console.log(k, Database_1.default.users[k]);
            }
            let queryResults = Database_1.default.users.filter((user) => user.id === id);
            if (queryResults.length === 0) {
                return null;
            }
            console.log('Repository findById: ' + queryResults[0].id);
            for (var k in queryResults[0]) {
                console.log(k, queryResults[0]);
            }
            return this.convert(queryResults[0]);
        });
    }
    ;
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository createUser ' + user.email);
            const userIds = Database_1.default.users.map((user) => user.id);
            const maxId = Math.max.apply(null, userIds);
            const newId = maxId + 1;
            const newUser = new User_1.User(newId, user.name, user.firstname, user.lastname, user.email);
            Database_1.default.users.push(newUser);
            return newUser;
        });
    }
    ;
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository updateUser');
            let returnUser;
            Database_1.default.users = Database_1.default.users.map((tu) => {
                console.log(tu.id + ' ' + tu.name);
                console.log(tu.id);
                if (tu.id === user.id) {
                    let name;
                    console.log('update -> ' + tu.id);
                    if (user.name) {
                        tu.name = user.name;
                    }
                    return tu;
                }
                else {
                    return tu;
                }
            });
            return user;
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Repository delete');
            Database_1.default.users = Database_1.default.users.filter((user) => {
                return user.id !== id;
            });
            return null;
        });
    }
    ;
}
exports.UserRepository = UserRepositoryImpl;
