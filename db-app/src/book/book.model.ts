import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from './../category/category.model';
import { Subcategory } from './../subcategory/subcategory.model';

@Table({})
export class Book extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    bookId: number;  

    @Column 
    title: string;

    @Column 
    author: string;

    @Column  
    edition: string  

    @Column 
    price: number;

    @Column 
    img: string;

    @Column({ defaultValue: 1 })
    availability: number;

    @Column 
    details: string;

    @Column 
    pages: number;

    @Column 
    createdAt: Date;

    @Column 
    updatedAt: Date;

    @Column
    deletedAt: Date;

    @Column 
    language: string;

    @ForeignKey(() => Category)
    @Column 
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @ForeignKey(() => Subcategory)
    @Column 
    subcategoryId: number;

    @BelongsTo(() => Subcategory)
    subcategory: Subcategory
}