import { getRepository } from 'typeorm';
import { Users } from '../entities/users.entity';
import users from './users.mock';


const insertUsers = async () => {
  const usersRepo = getRepository(Users);
  const usersData: Users[] = [];
  let usersInstance: Users;
  users.forEach(user => {
    usersInstance = new Users();
    usersInstance.name = user.name;
    usersInstance.trophies = user.trophies;
    usersInstance.lives = user.lives;
    usersData.push(usersInstance);
  });
  await usersRepo.save(usersData);
};


