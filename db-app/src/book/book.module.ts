import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './book.model';

@Module({
  imports: [SequelizeModule.forFeature([ Book ])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
