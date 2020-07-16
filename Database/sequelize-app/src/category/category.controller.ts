import { CategoryService } from './category.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Category } from './category.model';

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {

    }

    @Get()
    async categories(): Promise<Category[]> {
        // return await this.categoryService.findAll();
        return await this.categoryService.findAllWithBooks();
    }

    @Get(':catId')
    async category(@Param('catId') catId): Promise<Category> {
        // return await this.categoryService.findOne(catId);
        return await this.categoryService.findOneWithBooks(catId);
    }
}
