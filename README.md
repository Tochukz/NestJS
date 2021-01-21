# NestJS
__Based on the official documentation__  

## Overview
__Setup__  
Install the NestJS CLI tool  
```
$ npm i -g @nestjs/cli
```  

Create a NestJS project  
```
$ nest new my-app
```  

Start the new NextJs app  
```
$ npm run start
```  

Start the new NextJS app with hot reload  
```
$ npm run star: dev
```  

__Platform__    
Technically, Nest is able to work with any Node HTTP framework once an _adapter_ is created. There are two HTTP platform supported out-of-the-box: _express_ and _fastify_.  
The `@nestjs/platorm-express` package is used by default.   
Whichever platform used, it exposes it own application interface.  These are seen resectively as `NestExpressApplication` and `NestFastifyApplication`.  

__Controllers__  
To generate a controller class:   
```
$ nest g controller user
```  
A `user.controller` file will be generated in a directory named `user`.  

__Providers__   
A provider could be a service, repository, factory, helper or similar classes. A provider can be used to inject dependencies into a class. In Nest, a provider is annotated with an `@Injectable()` decorator.  
A provider normally have a lifetime ("scope") synchronized with the application lifecycle. There are also ways to make your provider lifetime _request-scoped_ as well, See [here](https://docs.nestjs.com/fundamentals/injection-scopes).

__Services__  
A service is a provider, it may be used for example as a data storage and retrieval class. In Nest, a server class is annotated with the `@Injectable()` decorator.
To generate a service class:
```
$ nest g service user
```  
A  `user.service` file will be generated in the `user` directory.  
We may also generate an interface that describes the `user` model.
```
$ nest g interface user/interfaces/user
```
The will generated a `user.interface` class in the `src/user/interfaces` directory.  

__Modules__  
To generate a module   
```
$ nest g module admin
```  
You can make a module global by annotating it with the `@Global()` decorator.   

__Midlewares__  
Create a middleware  
```
$ nest g middleware common/middlewares/logger
```
The file `logger.middleware.ts` will be generated in the `src/common/middlewares` directory.

## Technique
### Database  
#### Sequelize Integration  
Install the required dependencies  
```
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
```
Here we are working with mysql therefore the `mysql2` library was installed. Other database library maybe installed similarly if you are using another type of supported database like PostgreSQL, MySQL, Microsoft SQL Server, SQLite, and MariaDB.  

__Migrations__  
Migration is managed by `Sequelize CLI` and not `Nest`. Go to [Sequelize documentation](https://sequelize.org/v5/manual/migrations.html#the-cli) to learn more.  

### Authentication
To implement authentication using passport, the following dependencies are needed:
* Passport Node module: `passport`
* Nest module that wraps the  `passport`: `@nestjs/passport`
* A module for your chosen authentication strategy e.g `passport-local` or `passport-jwt`
* The type definition for your chosen authentication strategy e.g `@types/passport-local`

Let install dependency for username/password authentication:
```
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
```  
Here we use the `passport-local` strategy.   

To implement `JWT` functionality, a couple of packages must be installed :
* `@nestjs/jwt` helps with JWT manipulation  
* `passport-jwt` is the passport implementation of the JWT strategy  
* `@types/passport-jwt` provides the TypeScript type definitions.  
```
$ npm install @nestjs/jwt passport-jwt
$ npm install @types/passport-jwt --save-dev   
```  

### Validation and Pipes  
A pipe is a class annotated with the `@Injectable()` decorator and implements the `PipeTransform` interface.  
Pipes can be used to transform incoming request data, cast data types and validate data.  
Pipes run inside the exceptions zones. If an exception is thrown inside a Pipe, no controller method will be called.  

__Object schema validation__  
To carryout an object validation you can use the _schema-based_ approach. You can create a _Joi-based_ scheme using the _Joi_ library.  
```
$ npm install --save @hapi/joi
$ npm install --save-dev @types/hapi__joi  
```

__Class Validator__  
Instead of using the _schema validation_ technique shown above, use can use _class validation_. First install the `class-validator` and `class-transformer` modules.  
```
$ npm i --save class-validator class-transformer
```
Learn more about `class-validator` decorators on [Githuh](https://github.com/typestack/class-validator#usage)
