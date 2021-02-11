export class UsersService {
  private users = [];

  public create(user) {
    this.users.push(user);

    return user;
  }
}