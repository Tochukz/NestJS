import { Module, HttpModule } from '@nestjs/common';
import { CategoryService } from './category.service';

@Module({
  imports: [HttpModule],
  providers: [CategoryService]
})
export class CategoryModule {}
