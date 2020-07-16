import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Book } from './book.model';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get() 
    books() {
      //return this.bookService.findAll();
      return this.bookService.findAllWithCatAndSub();
    }

    @Get(':bookId')
    book(@Param('bookId') bookId) {
        // return this.bookService.findOne(bookId);
        return this.bookService.findOneWithCatAndSub(bookId);
    }

    @Post('create')
    async create(@Body() book: BookDto) {
        const newBook = await this.bookService.create(book);
        return newBook
    }

    @Post('create-many')
    async createMany(@Body() books: BookDto[]): Promise<Array<Book>> {
        const newBooks = await this.bookService.createMany(books);
        return newBooks
    }
    
}
