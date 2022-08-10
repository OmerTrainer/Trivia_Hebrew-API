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

@EntityRepository()
class UserService {
  public async findAllUser(): Promise<IUser[]> {
    const users: IUser[] = await Users.find();
    return users;
  }

  public async findUserByf_id(userf_id: string): Promise<IUser> {
  try {
    
    if (isEmpty(userf_id)) throw new HttpException(400, "You're not userf_id");
    
    const findUser: IUser = await Users.findOne({ where: { f_id: userf_id } });
    
    return findUser;
  } catch (error) {
    
  }
  }
  public async findBestUserByTrophies(userf_id: string): Promise<IUser> {
    const userTrophies = (await this.findUserByf_id(userf_id)).trophies;
    if (isEmpty(userf_id)) throw new HttpException(400, "You're not userf_id");
    const findUser: IUser = await Users.createQueryBuilder("Users")
      .where("Users.f_id != :userf_id", { userf_id })
      .orderBy("ABS(Users.trophies - :trophies)", "ASC")
      .setParameter("trophies", userTrophies)

      .getOne();
    if (!userf_id) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: IUser): Promise<IUser> {
    const defaultLifeCount = 3;
    const findUser = await this.findUserByf_id(userData.f_id);
    userData.lives = defaultLifeCount;
    userData.last_sign_in = new Date()
    userData.first_sign_in = new Date()
    userData.trophies = 0;
    if(isEmpty(findUser)){
      const createUserData: IUser = await Users.create({ ...userData }).save();
      return createUserData;

    }else{
      throw new HttpException(400, "You're not userData");
      
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
