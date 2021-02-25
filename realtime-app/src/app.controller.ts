import { Controller, Get , MessageEvent, Sse} from '@nestjs/common';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

   @Sse('event-stream')
   eventStream(): Observable<MessageEvent> {
     const cities = ['Mexico', 'Lagos', 'New York', 'Laos', 'Joburg', 'Durban', 'Maryland', 'Sydney', 'Houstin', 'Mexico City', 'Cairo'];
     return interval(5000).pipe(map((_) => {
        const rand  = Math.floor(Math.random() * 10);
        return { 
            data: {
              city: cities[rand]
            }
        };
     }));
   }

   @Sse('ss-event')
   serverEvent(): Observable<MessageEvent> {
    const cities = ['Mexico', 'Lagos', 'New York', 'Laos', 'Joburg', 'Durban', 'Maryland', 'Sydney', 'Houstin', 'Mexico City', 'Cairo'];

    const random = Math.floor(Math.random() * 10);
    return of({ 
     data: {
       city: cities[random]
     }
    });
   }
}

//For more on observables and rxjs see https://betterprogramming.pub/how-to-create-observables-in-rxjs-aa3bf79b05e0
