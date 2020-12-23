import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Global middleware application
  app.use(AuthMiddleware);
  await app.listen(5000);
}
bootstrap();
