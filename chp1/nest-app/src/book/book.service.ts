import { Book } from './interfaces/book';
import { DbService } from './../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    constructor(private dbservice: DbService) {}

    create(book: Book): Book {
        const newBook = <Book> this.dbservice.create('books', 'book_id', book);
        return newBook
    }

    get(): Book[] {
        return this.dbservice.get('books');
    }

    find(bookId: number): Book {
        return this.get().find(book => book.book_id == bookId)
    }
}
