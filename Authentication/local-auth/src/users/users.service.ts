import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users: any[];

    constructor() {
      this.users = [
        {
          userId: 1,
          name: 'John',
          username: 'john',
          password: 'changeme',
          city: "Cape Town",
        }, 
        {
          userId: 2,
          name: 'Bryam',
          username: 'bryam',
          password: 'secret',
          city: 'Joburg'
        }
      ]
    }

    async findOne(username: string): Promise<any> {
      return this.users.find(user => user.username === username);
    }
}
