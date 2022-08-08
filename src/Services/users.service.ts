import DbGlobals from "../globals/db";
import {
  EntityRepository,
  FindRelationsNotFoundError,
  getRepository,
  Repository,
  Not,
  MoreThanOrEqual,
  LessThan,
} from "typeorm";
import { CreateUserDto } from "../dtos/users.dto";
import { Users } from "../entities/users.entity";
import { HttpException } from "../exceptions/HttpException";
import { IUser } from "../interfaces/users.interface";
import { isEmpty } from "../utils/util";
import { equals } from "class-validator";
import { User } from "../entities/User";

@EntityRepository()
class UserService {
  public async findAllUser(): Promise<IUser[]> {
    const users: IUser[] = await Users.find();
    return users;
  }

  public async findUserById(userId: number): Promise<IUser> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: IUser = await Users.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }
  public async findBestUserByTrophies(userId: number): Promise<IUser> {
    const userTrophies = (await this.findUserById(userId)).trophies;
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");
    const findUser: IUser = await Users.createQueryBuilder("Users")
      .where("Users.id != :userId", { userId })
      .orderBy("ABS(Users.trophies - :trophies)", "ASC")
      .setParameter("trophies", userTrophies)

      .getOne();
    if (!userId) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: IUser): Promise<IUser> {
    const findUser = this.findUserById(userData.id);

    if(isEmpty(findUser)){
      throw new HttpException(400, "You're already User");

    }else{
      if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
      
      const createUserData: IUser = await Users.create({ ...userData }).save();
      return createUserData;
    }

  }

  public async createUsers(usersData: CreateUserDto[]): Promise<IUser[]> {
    if (isEmpty(usersData))
      throw new HttpException(400, "You're not usersData");

    const usersRepository = getRepository(Users);
    const createUsersData: IUser[] = await usersRepository.save(usersData);

    return createUsersData;
  }

  public async updateUser(
    userId: number,
    userData: CreateUserDto
  ): Promise<IUser> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: IUser = await Users.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    await Users.update(userId, { ...userData });

    const updateUser: IUser = await Users.findOne({ where: { id: userId } });
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<IUser> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: IUser = await Users.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    await Users.delete({ id: userId });
    return findUser;
  }
}
export default UserService;
