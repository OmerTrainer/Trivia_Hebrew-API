import { getRepository } from 'typeorm';
import { Users } from '../entities/users.entity';
import users from './users.mock';

export const insertMockData = async () => {
  await insertUsers();
};



const insertUsers = async () => {
  const usersRepo = getRepository(Users);
  const usersData: Users[] = [];
  let usersInstance: Users;
  users.forEach(user => {
    usersInstance = new Users();
    usersInstance.name = user.name;
    usersInstance.trophies = user.trophies;
    usersInstance.lives = user.lives;
    usersInstance.email = user.email;
    usersInstance.f_id = user.f_id;
    usersInstance.first_sign_in = user.first_sign_in;
    usersInstance.last_sign_in = user.last_sign_in;
    usersData.push(usersInstance);
  });
  await usersRepo.save(usersData);
};

