import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail(undefined, { message: 'Email is invalid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password should be string' })
  @MinLength(6, { message: 'Password should not be less than 6 symbols' })
  password: string;
}
