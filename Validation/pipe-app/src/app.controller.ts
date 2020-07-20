import * as Joi  from '@hapi/joi';
import { Controller, Get, Param, ParseIntPipe, HttpStatus, Query, ParseBoolPipe, Body, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import UserDto from './dto/user.dto';
import JoiValidationPipe from './joi.validation.pipe';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Binding a pipe at the method parameter level
  @Get('users/:id')
  user(@Param('id', ParseIntPipe) id: number) {
    return typeof id;
  } 

  // Using pip instance with options object
  @Get('books/:id')
  book(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return typeof id
  }

  // Validating query string parameter using pipe
  @Get('students') 
  students(@Query('passed', ParseBoolPipe) passed: boolean) {
    return typeof passed;
  }
  /* You can also use ParseUUIDPipe and ParseArrayPipe */

  @Post('users/create') 
  @UsePipes(
    new JoiValidationPipe(
      Joi.object({ 
        username: Joi.string().required(), 
        email: Joi.string().required(),
        number: Joi.number().optional()
      })
    )
  )
  create(@Body() user: UserDto) {
     return user; 
  }
}
