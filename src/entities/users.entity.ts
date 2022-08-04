import { IsNotEmpty } from 'class-validator';
import { IUser } from '../interfaces/users.interface';

import {
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
  @IsNotEmpty()
  name: string;
  
  @Column()
  trophies: number;

  @Column()
  lives: number;
}