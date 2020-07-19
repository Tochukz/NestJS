import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    private readonly users: User[];

    constructor() {
        this.users = [
          {
              userId: 1, 
              username: "john",
              password: 'changeme',
          },
          {
              userId: 2,
              username: 'chris',
              password: 'Secret',
          },
          {
            userId: 3,
            username: 'maria',
            password: 'guess',
          },
        ]
    }

    async findOne(userame: string): Promise<User | undefined> {
        return this.users.find(user => user.username === userame);
    }
}
