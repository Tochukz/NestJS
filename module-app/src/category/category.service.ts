import { Injectable, HttpService } from '@nestjs/common';
import { RequestService } from './../request/request.service';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
    constructor(private requestService: RequestService, private httpService: HttpService) {}

    async getCategoryById(categoryId: number): Promise<Category> {
      const url = this.requestService.getUrl('categories', categoryId);
      const response = await this.httpService.get(url).toPromise();
      const category = <Category> response.data;     
      return category;
    }

    async getCategories(): Promise<Array<Category>> {
      const url = this.requestService.getUrl('categories');
      //const response = await this.httpService.get(url).toPromise();
      const response = await this.requestService.getHttpService().get(url).toPromise();
      const categories = <Array<Category>> response.data;
      return categories;
    }
}
