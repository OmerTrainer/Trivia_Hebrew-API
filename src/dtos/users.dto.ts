
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Users } from '../entities/users.entity';
import { ManyToOne , JoinColumn} from 'typeorm';
export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  public emailAddress: string;

  @IsNumber()
  public userRoleId: number;

  @IsNumber()
  public forceId: number;


}
