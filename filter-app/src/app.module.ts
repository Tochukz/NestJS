import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { HttpExceptionFilter } from './http-exception-filter';
import { AllExceptionFilter } from './all-exception-filter';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController],
  providers: [
    AppService,
    // Second way to define global filter. This style is better fo dependency injection and you can add as many filters as you want.
    { 
      provide: APP_FILTER,
      useClass: AllExceptionFilter, //useClass: HttpExceptionFilter,      
    }
  ],
})
export class AppModule {}
