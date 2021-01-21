import { ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';

@Catch(HttpException) 
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();

      const responseBody = {
        statusCode: status, 
        timestamp: new Date().toISOString(),
        path: request.url
      }
      response.status(status).json(responseBody);
  }
}

//  The @Catch() decorator may take a single parameter, or a comma-separated list. This lets you set up the filter for several types of exceptions at once.
