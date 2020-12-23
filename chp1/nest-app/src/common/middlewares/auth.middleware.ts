import { Request, Response } from 'express';
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
/*
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('authenticated');
    next();
  }
}
*/

export function AuthMiddleware(req: Request, res: Response, next: Function) {
  console.log('authenticated');
  if (req.path.indexOf('admin') > -1) {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }
  if (req.path.indexOf('404') > -1) {
     throw new HttpException({ 
       status: HttpStatus.NOT_FOUND, 
       error: 'Page was not found'
      }, HttpStatus.NOT_FOUND);
  }
  next();
}