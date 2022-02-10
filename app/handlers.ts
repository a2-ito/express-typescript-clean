import { Request, Response } from 'express';

import * as Logic from "./logic";


export const rootHandler = (_req: Request, res: Response) => {
  return res.send('Hello, Your API is working!!');
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = Logic.helloBuilder(name);

  return res.json(response);
};
