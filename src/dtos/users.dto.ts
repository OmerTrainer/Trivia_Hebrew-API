
import { IsEmail, IsNumber, IsString } from 'class-validator';

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
