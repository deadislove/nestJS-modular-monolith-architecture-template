import { Injectable } from "@nestjs/common";
import * as winston from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class LoggerService {
    private logger: winston.Logger

    constructor() {
        const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({ stack: true }),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) }), // Console output
                dailyRotateFileTransport,
            ],
        })
    }

    log(message: string) {
        this.logger.info(message);
    }

    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    debug(message: string) {
        this.logger.debug(message);
    }

    verbose(message: string) {
        this.logger.verbose(message);
    }
}