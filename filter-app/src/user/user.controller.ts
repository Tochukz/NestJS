import { Controller, UseFilters, Get, BadRequestException } from '@nestjs/common';
import {HttpExceptionFilter } from '../http-exception-filter';

// class-scope filter
@UseFilters(HttpExceptionFilter)
@Controller('users')
export class UserController {

    @Get('') 
    all() {
        throw new BadRequestException()
    }
}

/* 
 useFilter() can also take a single call, or a comma-separated list of filter classes.
 useFilter() can take a single filter instance, or a comma-separated list of filter instances.
 useFilter() can be used to decorate a method thus making it method scope
*/