import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book/book.model';
import { Category } from './category/category.model';
import { CategoryModule } from './category/category.module';
import { Subcategory } from './subcategory/subcategory.model';
import { SubcategoryModule } from './subcategory/subcategory.module';

@Module({
  imports: [
    BookModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ojlinks_v2',
       //models: [ Book, Category, Subcategory ]
       autoLoadModels: true,
       synchronize: true,
    }),
    CategoryModule,
    SubcategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
