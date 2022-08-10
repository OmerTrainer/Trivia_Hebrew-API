import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { IUser } from '../interfaces/users.interface';
import HttpStatusCode from '../globals/http_status_code';
import UserService from '../services/users.service';

class UsersController {
  public userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: IUser[] = await this.userService.findAllUser();

      res.status(HttpStatusCode.OK).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      
      const userf_id = String(req.params.f_id);
      const findOneUserData: IUser = await this.userService.findUserByf_id(userf_id);

      res.status(HttpStatusCode.OK).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  public getBestUserByTrophies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const userf_id = String(req.params.f_id);
      const findOneUserData: IUser = await this.userService.findBestUserByTrophies(userf_id);

      res.status(HttpStatusCode.OK).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: IUser = req.body;
      
      const createUserData: IUser = await this.userService.createUser(userData);

      res.status(HttpStatusCode.CREATED).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userf_id = Number(req.params.f_id);
      const userData: CreateUserDto = req.body;
      const updateUserData: IUser = await this.userService.updateUser(userf_id, userData);

      res.status(HttpStatusCode.OK).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userf_id = Number(req.params.f_id);
      const deleteUserData: IUser = await this.userService.deleteUser(userf_id);

      res.status(HttpStatusCode.OK).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
