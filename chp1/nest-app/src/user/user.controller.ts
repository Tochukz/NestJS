import { NewUserDto } from './dto/new-user.dto';
import { Controller, Get, Delete, HttpCode, Res, Req, Post, Body, Header, Redirect, Param, Query, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
    constructor(private userService: UserService)  {}

    @Get() 
    async all(): Promise<User[]> {
      return await this.userService.get();
    }

    @Delete('delete')
    @HttpCode(204)
    destroy(@Body('user_id') userId) {
      this.userService.destroy(userId);
    }

    @Get('all')
    async allUsers(@Res() res) {
        // This action uses the library-specific response object from ExpressJs.
        // By injecting @Res() you become responsible to manage the response. Nest no longer handle th response automatically
        const users = await this.getUsers();
        //return res.status(200).send(users);
        return res.status(HttpStatus.OK).send(users);
    } 

    
    @Get('user/:id')
    findUser(@Param('id') userId) {
        return this.userService.find(userId)
    }

    @Get('user')
    async getUser(@Query('user_id') userId): Promise<any> {
      return await this.userService.find(userId);
    }


    @Header('content-type', 'text/html')
    @Get('home') 
    home() {
        // We may also use the ibrary-specific res.header() from Express.JS instead of the @Header decorator.
        return `<html> 
                  <body>
                    <h1>Home Page</h1>
                    <h2>Welcome</h2>
                  </body>
                </html>`;
    }

   

    @Get('index.html')
    @Redirect('/users/home', 307)
    homePage() {
      // We can also use the library-specific res.redirect() from Express.js by injecting the @Res decorator.
    }

    @Get('aboutus')
    @Redirect('fallback/path')
    aboutUs() {
      // This is another way to do a redirect dynamically
      return {
          statusCode: 307,
          url: '/users/home'
      }
    }

    @Get(':id')
    user(@Param() param) {
      return this.userService.find(param.id);
    }
    
    @Post('create')
    create(@Req() req: Request) {
     // This actions uses the express type hinting;
      const { email, username, password} = req.body;
      const newUser = this.userService.create({ email, username, password} );
      delete newUser.password;
      return newUser;
    }

    @Post('new') 
    createNew(@Body() body) {
        const { email, username, password} = body;
        const newUser = this.userService.create({ email, username, password} );
        delete newUser.password;
        return newUser;
    }

    @Post('user/new')
    newUser(@Body() newUserDto: NewUserDto) {
        // Here we use a Data Trasnfer Object DTO
        const newUser = this.userService.create(newUserDto);
        delete newUser.password;
        return newUser;
    }

    async getUsers(): Promise<User[]> {
        return await this.userService.get();
    }
}
