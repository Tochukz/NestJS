import { Controller, Get, Post, Body, Res} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private eventEmitter: EventEmitter2) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/chat') 
  chat(@Body() body, @Res() res) {    
    this.eventEmitter.emit('chat.newMessage', body);
    return res.send({received: body});
  }
}

