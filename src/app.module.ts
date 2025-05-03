import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@modules/user/user.module';
import { DatabaseModule } from './config';
import { ProductModule } from '@modules/product/product.module';
import { LoggerModule } from '@common/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LoggerModule,
    DatabaseModule,
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
