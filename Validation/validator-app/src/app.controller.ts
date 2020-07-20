import { ValidationPipe } from './validation.pipe';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import UserDto from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  /*
  @Post('users/create')
  async create(@Body(new ValidationPipe()) userDto:  UserDto) {
    return userDto;
  }
  */

  /** Using the global ValidationPipe */
  @Post('users/create')
  async create(@Body() userDto:  UserDto) {
    return userDto;
  }

}
