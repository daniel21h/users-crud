import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUsernameAlreadyExist } from "./pipes/validations.pipe";

export class User {
  id: number;

  @IsUsernameAlreadyExist({
    message: 'Username must be unique.'
  })
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