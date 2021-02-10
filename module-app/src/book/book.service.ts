import { RequestService } from './../request/request.service';
import { Injectable, HttpService } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(private requestService: RequestService, private httpService: HttpService) {}

    async getBookById(bookId: number): Promise<Book> {
      const url =  this.requestService.getUrl('books', bookId);
      const response = await this.httpService.get(url).toPromise();     
      const book = <Book> response.data;         
      return book;
    }

    async getBooks(): Promise<Book[]> {
      const url = this.requestService.getUrl('books');
      //const response = await this.httpService.get(url).toPromise();
      const response = await this.requestService.getHttpService().get(url).toPromise();
      const books = <Book[]> response.data;
      return books;
    }
}
