import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server } from "socket.io";

//@WebSocketGateway(5000, {namespace: 'chat'})
@WebSocketGateway()
export class SocketGateway {
  /*
  @SubscribeMessage('new-message')
  handleMessage(@MessageBody() data: string): string {   
    data['time'] = new Date().toLocaleString(); 
    
    // Send mesage back to the specific client 
    return data;
  }
  */

  @WebSocketServer() server: Server;
  @SubscribeMessage('new-message') 
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client) {   
    data['time'] = new Date().toLocaleString();  
    
    /** emit to only the client that sent the message */ 
    //client.emit('server-message', data);

    /** emits to all connected client */
    this.server.emit('server-message', data);
  }
}

/**
 The gateway listens on the same port as the HTTP server unless you specified otherwise using the @WebSocketGateway decorator.
 you can pass others options to the decorator like @WebSocketGateway(81, { transports: ['websocket'] })
*/