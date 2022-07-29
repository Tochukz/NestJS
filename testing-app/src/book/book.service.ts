import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
  async getBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
        const books = this.allBook();
        resolve(books);
    });
  }

  private allBook() {
    return [
      new Book(1, "Introduction to Java", "Adam Freeman", 3500, "A gentle introduction to Java Programming"),
      new Book(2, "React up and Running", "James Cordon", 4200, "A straight to the point treatement of React.js"),
      new Book(3, "ASP.NET Core7", "Adam Freeman", 5600, "Comprehensive handling of ASP.NET Core for beginners and adavanced developers"),
    ]
  }
}
