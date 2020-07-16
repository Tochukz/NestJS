import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from './subcategory.model';
import { SubcategoryController } from './subcategory.controller';

@Module({
  imports: [SequelizeModule.forFeature([ Subcategory ])],
  providers: [SubcategoryService],
  controllers: [SubcategoryController]
})
export class SubcategoryModule {}
