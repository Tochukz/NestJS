import { Injectable } from '@nestjs/common';
import { Category } from './category.model';
import { Book } from '../book/book.model';

@Injectable()
export class CategoryService {
    async findAll(): Promise<Category[]> {
        return await Category.findAll();
    }

    async findAllWithBooks(): Promise<Category[]> {
        return await Category.findAll({ include: [Book] });
    }

    async findOne(categoryId: number): Promise<Category> {
        return await Category.findOne({ where: { categoryId }})
    }

    async findOneWithBooks(categoryId: number): Promise<Category> {
        return await Category.findOne({ where: { categoryId }, include: [Book]})
    }
}
