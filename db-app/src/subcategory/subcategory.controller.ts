import { Subcategory } from './subcategory.model';
import { Controller, Get, Param } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategories')
export class SubcategoryController {
    constructor(private subcatService: SubcategoryService) {

    }

    @Get()
    async subcategories(): Promise<Subcategory[]> {
        // return await this.subcatService.findAll();
        return await this.subcatService.findAllWithBooks();
    }

    @Get(':subcatId') 
    async subcategory(@Param('subcatId') subcatId): Promise<Subcategory> {
        // return await this.subcatService.findOne(subcatId);
        return await this.subcatService.findOneWithBook(subcatId);
    }
}
