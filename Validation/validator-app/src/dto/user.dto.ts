import { IsString, IsInt, IsEmail, IsNumber } from 'class-validator';

export default class UserDto {
    @IsString() 
    username: string;

    @IsEmail(undefined, {message: 'Email is required'})
    email: string;

    @IsNumber()
    phone: number;
}