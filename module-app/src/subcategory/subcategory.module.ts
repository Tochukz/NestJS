import { Module, HttpModule } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';

@Module({
  imports: [HttpModule],
  providers: [SubcategoryService],
  exports: [ SubcategoryService ]
})
export class SubcategoryModule {}
