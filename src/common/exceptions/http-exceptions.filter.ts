import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFillter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const resposne = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
        const message = exception instanceof HttpException ? exception.getResponse() : 'Internal server error'

        resposne.status(status).json({
            code: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message
        })
    }
    
}