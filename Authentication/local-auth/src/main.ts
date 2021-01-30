import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

import * as exphbs from 'express-handlebars';
import * as session from 'express-session';
import flash = require('connect-flash');
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../public'));

  app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
  app.set('views', join(__dirname, '../views'));
  app.set('view engine', '.hbs');

  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  app.useGlobalFilters(new AuthExceptionFilter());

  await app.listen(5000);
}
bootstrap();
