import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {  
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception.name == 'QueryFailedError');
    console.log(exception.getResponse);
    
    const errorResponse = {
        statusCode: status, 
        timestamp: new Date().toISOString(),
        message: "my message"
      }


    response
      .status(status)
      .json(errorResponse);
  }
}