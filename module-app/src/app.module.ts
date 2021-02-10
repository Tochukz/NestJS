import { RequestModule } from './request/request.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, BookModule, SubcategoryModule, CategoryModule, RequestModule],
  controllers: [AppController],
  providers: [ AppService ],
})
export class AppModule {}
