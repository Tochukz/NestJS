import { Subcategory } from './../subcategory/subcategory.model';
import { Controller, Get, Param } from '@nestjs/common';
import { SubcategoryService } from './../subcategory/subcategory.service';
import { CategoryService } from './../category/category.service';
import { BookService } from './book.service';

@Controller()
export class BookController {
    constructor(private bookService: BookService, private categoryService: CategoryService, private subcategoryService: SubcategoryService) {}

    @Get('categories/:categoryId')
    async category(@Param('categoryId') categoryId: number) {
      const category = await this.categoryService.getCategoryById(categoryId);
      return category;
    }

    @Get('categories') 
    async categories() {
     const categories = await this.categoryService.getCategories();
     return categories;
    } 

    @Get('subcategories/:subcategoryId')
    async subcategory(@Param('subcategoryId') subcategoryId: number) {
      const subcategory = await this.subcategoryService.getSubcategoryById(subcategoryId);
      return subcategory;
    } 

    @Get('subcategories') 
    async subcategories() {
      const subcategories = await this.subcategoryService.getSubcategories();
      return subcategories;
    }

    @Get('books/:bookId')
    async book(@Param('bookId') bookId: number) {
      const book = await this.bookService.getBookById(bookId);
      return book;
    }

    @Get('books')
    async books() {
      const books = await this.bookService.getBooks();
      return books;
    }

}
