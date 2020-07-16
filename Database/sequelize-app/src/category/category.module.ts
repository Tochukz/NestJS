import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from  './category.model';
import { CategoryController } from './category.controller';

@Module({
  imports : [SequelizeModule.forFeature([ Category ])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
