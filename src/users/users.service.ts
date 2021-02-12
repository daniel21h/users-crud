import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      id: 1,
      username: 'daniel21h',
      email: 'daniel@gmail.com',
      password: '123456',
      name: 'Daniel Hessel',
      createdAt: new Date()
    }
  ];

  public create(user: User): User {
    this.users.push(user);

    return user;
  }

  public findByUsername(username: string): User {
    return this.users.find(user => user.username == username);
  }

}