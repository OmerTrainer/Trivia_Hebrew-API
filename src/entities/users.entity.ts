import { IsNotEmpty } from 'class-validator';
import { IUser } from '../interfaces/users.interface';

import {
  CreateDateColumn,
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class Users extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  f_id:string;
  @Column()
  email:string;
  @Column()
  
  @IsNotEmpty()
  name: string;
  
  @Column()
  trophies: number;

  @Column()
  lives: number;
      

  @CreateDateColumn()
  last_sign_in: Date;

  @CreateDateColumn()
  first_sign_in: Date;


  
}
