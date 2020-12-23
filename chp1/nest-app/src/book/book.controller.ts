import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { Book } from './interfaces/book';
import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get() 
    all() {
      return this.bookService.get();
    }

    @Post('create')
    create(@Body() book: BookDto) {
        const bookModel = <Book> book;
        const newBook = this.bookService.create(bookModel);
        return newBook;
    }

    @Get(':bookId')
    book(@Param('bookId') id) {
        return this.bookService.find(id);
    }
}
