import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { Book } from './book.model';
import { BookService } from './book.service';

describe('BookController', () => {
  let bookController: BookController;
  let bookService:  BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    bookService = module.get<BookService>(BookService);
    bookController = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(bookController).toBeDefined();
  });


  describe('getBooks', () => {
    it('should return an array of books', async () => {
      const result =  [
        new Book(1, "Introduction to Java", "Adam Freeman", 3500, "A gentle introduction to Java Programming"),
        new Book(2, "React up and Running", "James Cordon", 4200, "A straight to the point treatement of React.js"),
        new Book(3, "ASP.NET Core7", "Adam Freeman", 5600, "Comprehensive handling of ASP.NET Core for beginners and adavanced developers"),
      ];
      jest.spyOn(await bookService, 'getBooks').mockImplementation(async () => result);

      expect(await bookController.books()).toStrictEqual(result);
    });
  });
});
