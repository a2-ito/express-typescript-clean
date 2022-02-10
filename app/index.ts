import express from 'express'
import { rootHandler, helloHandler } from './handlers';
import { UserController } from "./interface/controller/UserController";
//import { TFindUserRequest } from "./interface/request/FindUserRequest";
import bodyParser from "body-parser";

export const app: express.Express = express()
const port = process.env.PORT || '3000';

const userController = new UserController();

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

app.get(
  "/user/:id",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.findById(req);
    console.log(result);
    res.send(result);
  }
);

app.post(
  "/user",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.createUser(req);
    res.send(result);
  }
);

app.delete(
  "/user/:id",
  async (req: express.Request, res: express.Response): Promise<void> => {
    let result = await userController.delete(req);
    console.log(result);
    res.send(result);
  }
);

app.listen(port, () => {
  //return console.log(`Server is listening on ${port}`);
  return null;
})
