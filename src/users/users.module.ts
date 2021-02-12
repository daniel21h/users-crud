import { Module } from "@nestjs/common";
import { IsUsernameAlreadyExistContraint } from "./pipes/validations.pipe";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, IsUsernameAlreadyExistContraint]
})
export class UsersModule { }