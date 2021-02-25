import { Module } from '@nestjs/common';
import { SsEventsController } from './ss-events.controller';

@Module({
  controllers: [SsEventsController]
})
export class SsEventsModule {}
