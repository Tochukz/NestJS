## Gateways
In Nest, a gateway is simply a class annotated with `@WeSocketGateway()` decorator.  Technically, gateways are platform-agnostic which makes them compatible with any WebSocket library once an adapter is created.  
There are two WS platforms supported out-of-the-box: [socket.io](https://github.com/socketio/socket.io) and [ws](https://github.com/websockets/ws).  

### Installation
__Socket IO Server__     
```
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ npm i --save-dev @types/socket.io
```
__NB__: `@nestjs/platform-socket.io` currently depends on `socket.io v2.3` and `socket.io v3.0` client and server are not backward compatible. You may wait for `Nest.js v8` to get `socket.io v3` support baked into `@nestjs/platform-socket.io`, otherwise, you can implement an adapter to use `socket.io v3`. See the [issue](https://github.com/nestjs/nest/issues/5676).  

__Socket IO Client__  
NPM module
```
npm install socket.io-client@2.3.1
```
CDN
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
```
