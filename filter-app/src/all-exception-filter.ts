import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus} from '@nestjs/common';
import {Request, Response} from 'express';

@Catch() // This will make the filter catch all exceptions regardles of type
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
      
      const responseBody = {
        statusCode: status, 
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message
      }
      response.status(status).json(responseBody);
  }
}

//  The @Catch() decorator may take a single parameter, or a comma-separated list. This lets you set up the filter for several types of exceptions at once.
