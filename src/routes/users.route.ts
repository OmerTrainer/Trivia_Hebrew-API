import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { CreateUserDto } from '../dtos/users.dto';
import { Routes } from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(``, this.usersController.getUsers);
    // this.router.get(`/:id(\\d+)`, this.usersController.getUserById);
    this.router.post(`/create`, this.usersController.createUser);
    this.router.put(`/update-statues`, this.usersController.updateOnlineStatues);
    this.router.get(`/AllUsers`, this.usersController.getUsers);
    this.router.get(`/:id(\\d+)`, this.usersController.getUserById);
    this.router.get(`/best-match/:id(\\d+)`, this.usersController.getBestUserByTrophies);
    // this.router.put(`/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
  }
}

export default UsersRoute;
