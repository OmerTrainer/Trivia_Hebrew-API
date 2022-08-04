import DbGlobals from '../globals/db';
import HttpStatusCode from '../globals/http_status_code';
import { NextFunction, Request, Response } from 'express';

class AuthController {
  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(HttpStatusCode.OK).json({ data: { dbGlobals: DbGlobals }, message: 'login' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
