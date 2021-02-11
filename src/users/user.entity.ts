import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
  id: number;

  @IsNotEmpty({ message: 'The username is mandatory.' })
  @IsString({ message: 'Username must be a string.' })
  username: string;

  @IsNotEmpty({ message: 'The email is mandatory.' })
  @IsEmail({}, { message: 'Invalid email.' })
  email: string;

  @IsNotEmpty({ message: 'The password is mandatory.' })
  password: string;

  @IsNotEmpty({ message: 'The name is mandatory.' })
  name: string;

  createdAt: Date;
}