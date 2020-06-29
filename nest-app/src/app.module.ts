import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleController } from './people/people.controller';
import { CarsController } from './cars/cars.controller';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';
import { ToolsModule } from './tools/tools.module';
import { SendmailsController } from './sendmails/sendmails.controller';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';


const mailerOptions = {
  transport: 'smtp://user@domain.com:pass@127.0.0.1:25',
  defaults: {
    from:'"nest-modules" <modules@nestjs.com>',
  },
  template: {
    dir: __dirname + '/templates',
    adapter: new HandlebarsAdapter(), // or new PugAdapter()
    options: {
      strict: true,
    },
  },
};

@Module({
  imports: [ToolsModule, MailerModule.forRoot(mailerOptions)],
  controllers: [AppController, PeopleController, CarsController, ToolsController, SendmailsController],
  providers: [AppService, ToolsService],
})
export class AppModule {}
