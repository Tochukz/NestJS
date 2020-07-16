import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Subcategory } from './../subcategory/subcategory.model';
import { Book } from '../book/book.model';

@Table({
  timestamps: false,
})
export class Category extends Model {
  @Column({ primaryKey: true })
  categoryId: number  

  @Column  
  category: string

  @HasMany(() => Book)
  books: Book[];
}