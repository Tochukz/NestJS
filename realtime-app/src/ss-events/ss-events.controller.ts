import { Controller, Sse, MessageEvent} from '@nestjs/common';
import { OnEvent, EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('sse')
export class SsEventsController {
    constructor(private eventEmitter: EventEmitter2) {}

    @Sse('stream')
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
 
    @Sse('chat-event')   
    serverEvent(): Observable<MessageEvent> {
      let event = {data: ''};
      this.eventEmitter.on('chat.newMessage', data => {
       event.data = data;
      });          
      return interval(5000).pipe(map((_) => {
        if (event.data && typeof event.data == 'object') {
          const copy = Object.assign({}, event.data);
          event.data = '';          
          return {
            data: copy
          };
        } else {          
          return {
            data: {}
          }
        }       
     }));
    }

    /* Another way to subscribe to an event */
    @OnEvent('chat.newMessage', {async: true})
    chatEventListener(data: any) {
        //console.log('payload', data); // payload { name: 'Chucks', message: 'How are you',time: '2021-02-25T08:38:02.018Z'}
    }
}

//For more on observables and rxjs see https://betterprogramming.pub/how-to-create-observables-in-rxjs-aa3bf79b05e0