import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/** Class-based middleware */
/*
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private count: number = 0;

  use(req: Request, res: Response, next: Function) {
    this.count++
    console.log('count', this.count);
    next();
  }
}
*/

/*
* Consider using the simpler functional middleware alternative any time your middleware doesn't need any dependencies.
*/

let count = 0;
/** Functional middleware */
export function LoggerMiddleware(req: Request, res: Response, next: Function) {
  count++;
  console.log('count', count);
  next();
}

