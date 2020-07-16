import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Book } from '../book/book.model';

@Table({
  timestamps: false
})
export class Subcategory extends Model {
  @Column({ primaryKey: true})
  subcategoryId: number

  @Column 
  subcategory: string

  @Column
  categoryId: number

  @HasMany(() => Book)
  books: Book[];
}