import { Controller, UnauthorizedException, Get} from '@nestjs/common';

@Controller('books')
export class BookController {
    @Get('')
    get() {
      throw new UnauthorizedException();
    }
}
