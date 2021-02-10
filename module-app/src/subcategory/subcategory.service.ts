import { RequestService } from './../request/request.service';
import { Injectable, HttpService } from '@nestjs/common';
import { Subcategory } from './subcategory.model';

@Injectable()
export class SubcategoryService {
    constructor(private requestService: RequestService, private httpService: HttpService) {}

    async getSubcategoryById(subcategoryId: number): Promise<Subcategory> {
        const url = this.requestService.getUrl('subcategories', subcategoryId);
        const response = await this.httpService.get(url).toPromise();
        const subcategory = <Subcategory> response.data;       
        return subcategory;
    }

    async getSubcategories(): Promise<Subcategory[]> {
        const url = this.requestService.getUrl('subcategories');
        //const response = await this.httpService.get(url).toPromise();
        const response = await this.requestService.getHttpService().get(url).toPromise();
        const subcategories = <Subcategory[]> response.data;
        return subcategories;
    }
}
