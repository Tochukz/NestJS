import { BookController } from './book/book.controller';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PatientModule } from './patient/patient.module';
import { StaffModule } from './staff/staff.module';
import { DbModule } from './db/db.module';
import { BookModule } from './book/book.module';
import cors from 'cors';

@Module({
  imports: [PatientModule, StaffModule, DbModule, BookModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, cors) // you can apply multiple middleware separeted by comma 
            .exclude(
              {path: 'users', method: RequestMethod.POST},
              'users/(.*)',
            )
            //.forRoutes('books');
            //.forRoutes({path: 'books', method: RequestMethod.GET});
            .forRoutes(UserController, BookController);
  }
}
