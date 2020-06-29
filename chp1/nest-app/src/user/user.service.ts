import { Injectable } from '@nestjs/common';
import  { User }  from './interfaces/user.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            user_id: 1,
            username: "tochukz",
            email: "truetochukz@gmail.com",
            password: "12345",
        },
        {
            user_id: 2,
            username: "briam",
            email: "briam@gmail.com",
            password: "12345",
        },
    ];

    create(user: User): User {
        user.user_id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    get(): User[] {
        return this.users;
    }

    find(userId: number): User {
        return this.users.find(user => user.user_id == userId);
    }

    destroy(userId: number) {
        const userIndex = this.users.findIndex(user => user.user_id == userId);
        if (userIndex > -1) {
            this.users.splice(userIndex, 1);
        }
    }

}
