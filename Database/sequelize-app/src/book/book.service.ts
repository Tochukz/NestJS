import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { Category } from './../category/category.model';
import { Subcategory } from './../subcategory/subcategory.model';
import { Sequelize } from 'sequelize-typescript';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
    constructor(private sequelize: Sequelize) {}

    async create(book: BookDto): Promise<Book> {
        try {
          const response = await Book.create(book);          
          return <Book>response;
        } catch(err) {
            throw err;
        }
    }

    async findAll(): Promise<Book[]> {
        return await Book.findAll();
    }

    async findAllWithCatAndSub(): Promise<Book[]> {
        return await Book.findAll({include: [Category, Subcategory]});
    }

    async findOne(bookId: number): Promise<Book> {
        return await Book.findOne({ where: { bookId }});
    }

    async findOneWithCatAndSub(bookId: number): Promise<Book> {
        return await Book.findOne({ where: { bookId }, include: [Category, Subcategory]});
    }

    async remove(bookId: number): Promise<void> {
        const book = await Book.findOne({ where: { bookId }});
        await book.destroy();
    }

    async createMany(books: BookDto[]): Promise<Book[]> {
        try {
            const results: Array<Book> = [];
            const response = await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t};
                books.forEach( async book => {
                  const newBook = await Book.create(book, transactionHost);
                  results.push(newBook);
                });            
                //await Book.create(books[0], transactionHost);
                //await Book.create(books[1], transactionHost);
            }); 
            console.log('response', results);
            return results;

        } catch(err) {
            // Transation has been rolled back 
            // err is whatever rejected the promise chain returned to the transaction
            throw err;
        }
    }
}
