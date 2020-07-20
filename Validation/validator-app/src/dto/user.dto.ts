import { IsString, IsInt, IsEmail, IsNumber } from 'class-validator';

export default class UserDto {
    @IsString() 
    username: string;

    @IsEmail()
    email: string;

    @IsNumber()
    phone: number;
}