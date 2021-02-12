import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "../users.service";

@Injectable()
@ValidatorConstraint()
export class IsUsernameAlreadyExistContraint implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) { }

  validate(username: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    /* Pega o objeto que tem implicitamente o valor de true e transforma
    explicitamente para true, em seguida inverte de true para false. */
    return !!!this.usersService.findByUsername(username);
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('Method not implemented.')
  }
}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameAlreadyExistContraint,
    })
  }
}