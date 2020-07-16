import { Injectable } from '@nestjs/common';
import { Subcategory } from './subcategory.model';
import { Book } from '../book/book.model';

@Injectable()
export class SubcategoryService {
    async findAll(): Promise<Subcategory[]> {
        return await Subcategory.findAll();
    }

    async findAllWithBooks(): Promise<Subcategory[]> {
        return await Subcategory.findAll({include: [Book]});
    }

    async findOne(subId: number): Promise<Subcategory> {
        return await Subcategory.findOne({ where: { subcategoryId: subId}})
    }

    async findOneWithBook(subId: number): Promise<Subcategory> {
        return await Subcategory.findOne({ where: { subcategoryId: subId}, include: [Book] })
    }
}
