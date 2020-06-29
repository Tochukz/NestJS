import { Injectable } from "@nestjs/common";
import { MailerService } from "@nest-modules/mailer";
import { Controller, Get } from '@nestjs/common';

@Injectable()
@Controller('sendmails')
export class SendmailsController {
  constructor(private readonly mailerService: MailerService) {}

  @Get()
  mailer(){
    this.mailerService
        .sendMail({
          to: 'test@nestjs.com', // sender address
          from: 'noreply@nestjs.com', // list of receivers
          subject: 'Testing Nest MailerModule ✔', // Subject line
          text: 'welcome', // plaintext body
          html: '<b>welcome</b>', // HTML body content
       })
       .then(() => console.log('Email Sent'))
       .catch(err => console.error('No email sent:', err));
  }
}
