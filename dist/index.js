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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const UserController_1 = require("./interface/controller/UserController");
//import { TFindUserRequest } from "./interface/request/FindUserRequest";
const body_parser_1 = __importDefault(require("body-parser"));
//import { TFindUserRequest } from "./interface/request/user/FindUserRequest";
const MysqlConnection_1 = require("./infrastructure/MysqlConnection");
exports.app = (0, express_1.default)();
//const app = express();
const port = process.env.PORT || '3000';
const con = new MysqlConnection_1.MysqlConnection();
const userController = new UserController_1.UserController(con);
exports.app.use(body_parser_1.default.json());
exports.app.get("/", handlers_1.rootHandler);
exports.app.get("/hello/:name", handlers_1.helloHandler);
exports.app.get("/users", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    let results = yield userController.findAllUsers();
    res.send(results);
}));
exports.app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield userController.createUser(req);
    res.send(result);
}));
exports.app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield userController.findById(req);
    console.log(result);
    res.send(result);
}));
exports.app.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield userController.updateUser(req);
    console.log(result);
    res.send(result);
}));
exports.app.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield userController.deleteUser(req);
    console.log(result);
    res.send(result);
}));
exports.default = exports.app;
