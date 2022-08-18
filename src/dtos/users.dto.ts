
import { IsEmail, IsNumber, IsString,IsDate } from 'class-validator';
import { Users } from '../entities/users.entity';
import { ManyToOne , JoinColumn} from 'typeorm';
export class CreateUserDto {
  @IsNumber()
  id: number;
  
  @IsString()
  name: string;
  
  @IsNumber()
  f_id: string;
  @IsEmail()
  public email: string;

  @IsNumber()
  public trophies: number;

  @IsNumber()
  public lives: number;
  @IsNumber()
  public isOnline: boolean;

  @IsDate()
  public first_sign_in: Date;
  @IsDate()
  public last_sign_in: Date;


}
