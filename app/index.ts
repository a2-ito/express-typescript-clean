import express from 'express';
import { rootHandler, helloHandler } from './handlers';
import { UserController } from "./interface/controller/UserController";
//import { TFindUserRequest } from "./interface/request/FindUserRequest";
import bodyParser from "body-parser";

//import { TFindUserRequest } from "./interface/request/user/FindUserRequest";
import { MysqlConnection } from "./infrastructure/MysqlConnection";

export const app: express.Express = express()
//const app = express();
const port = process.env.PORT || '3000';

const con = new MysqlConnection();
const userController = new UserController(con);

app.use(bodyParser.json());

app.get("/", rootHandler);
app.get("/hello/:name", helloHandler);

app.get(
  "/users",
  async (_, res: express.Response): Promise<void> => {
    let results = await userController.findAllUsers();
    res.send(results);
  }
);

app.post(
  "/users",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.createUser(req);
    res.send(result);
  }
);

app.get(
  "/users/:id",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.findById(req);
    console.log(result);
    res.send(result);
  }
);

app.put(
  "/users/:id",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.updateUser(req);
    console.log(result);
    res.send(result);
  }
);

app.delete(
  "/users/:id",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.deleteUser(req);
    console.log(result);
    res.send(result);
  }
);

export default app;
