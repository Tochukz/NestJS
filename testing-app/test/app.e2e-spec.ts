import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Book } from '../src/book/book.model';
import { BookModule } from '../src/book/book.module';
import { BookService } from '../src/book/book.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let bookService = {
    getBooks() {
      return [
        new Book(1, "Introduction to Java", "Adam Freeman", 3500, "A gentle introduction to Java Programming"),
        new Book(2, "React up and Running", "James Cordon", 4200, "A straight to the point treatement of React.js"),
        new Book(3, "ASP.NET Core7", "Adam Freeman", 5600, "Comprehensive handling of ASP.NET Core for beginners and adavanced developers"),
      ].map(item => ({...item}));
    }
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, BookModule],
    }).overrideProvider(BookService)
      .useValue(bookService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /books ', () => {
    return request(app.getHttpServer())
         .get('/books')
         .expect(200)
         .expect(
          bookService.getBooks(),
         );
  });

  afterAll(async () => {
    await app.close();
  });
});
