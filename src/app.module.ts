import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleController } from './people/people.controller';
import { CarsController } from './cars/cars.controller';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';

@Module({
  imports: [],
  controllers: [AppController, PeopleController, CarsController, ToolsController],
  providers: [AppService, ToolsService],
})
export class AppModule {}
