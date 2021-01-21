import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomException } from './custom-exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generic-error')
  generalError() {
    const error = new Error('General Error');
    error['status'] = 'Invalid parameter';
    throw error; // response {"statusCode": 500,"message": "Internal server error"}
  }

  @Get('forbidden-error')
  forbiddenError() {
    throw new HttpException('You are not allowed here!', HttpStatus.FORBIDDEN); // response = {"statusCode": 403,"message": "You are not allowed here!"}
  }

  @Get('custom-forbidden') 
  customForbidden() {
    const custom = {
      message: 'I forbid you!', 
      status: 403, 
      why: 'You not allowed'
    };
    throw new HttpException(custom, HttpStatus.FORBIDDEN); // response = {"message": "I forbid you!", "status": 403, "why": "You not allowed"}
  }

  @Get('not-authorized') 
  notAuthorized() {
    throw new CustomException();
  }
}
