import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class RequestService {
    constructor(private httpService: HttpService) {}

    getUrl(path: string, param?: number): string {
      let url;
      if (param){
        url = `http://ojlinks-api.test:8084/api/${path}/${param}`;
      } else {
        url =  `http://ojlinks-api.test:8084/api/${path}`;
      }
      return url;
    }

    getHttpService(): HttpService {
      return this.httpService;
    }
}
