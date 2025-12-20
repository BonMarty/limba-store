import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Prisma } from 'generated/prisma';

type BaseRegister = Pick<Prisma.UserCreateInput, 'email' | 'password' | 'name'>;

export class RegisterDto implements BaseRegister {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail(undefined, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password should be string' })
  @MinLength(6, { message: 'Password should not be less than 6 symbols' })
  password: string;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name should be string' })
  name: string;
}
