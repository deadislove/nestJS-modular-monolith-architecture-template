import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResposneInterceptor } from '@common/interceptors/response.interceptor';
import { HttpExceptionFillter } from '@common/exceptions/http-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResposneInterceptor())
  app.useGlobalFilters(new HttpExceptionFillter())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
