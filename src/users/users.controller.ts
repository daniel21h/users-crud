import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  private usersService = new UsersService();

  @Post()
  public create(@Body() user) {
    const userCreated = this.usersService.create(user);

    return userCreated;
  }
}