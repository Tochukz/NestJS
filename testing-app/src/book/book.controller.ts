import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async books() {
    const books = await this.bookService.getBooks();
    return books;
  }
}
