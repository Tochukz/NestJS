import { Module, HttpModule } from '@nestjs/common';
import { SubcategoryModule } from './../subcategory/subcategory.module';
import { CategoryService } from './../category/category.service';
import { CategoryModule } from './../category/category.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [CategoryModule, SubcategoryModule, HttpModule],
  controllers: [BookController],
  providers: [BookService, CategoryService] 
})
export class BookModule {}

/**
 The BookController uses both CategoryService and SubcategoryService.  
 The CategoryService is explicitly listed as a providers to be injected as a dependency. This is because CategoryModule only provides CategoryService but does not export it.  
 The SubcategroryService on the other hand is implicitly injected as a dependency. This is because SubcategoryModule not only provides SubcategroryService service, it also exports it.

 All the Services uses the RequestService without having their module import RequestModule. This is because RequestModule is made a global module using the Gobal() decorator.
*/
