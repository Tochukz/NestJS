import { Module, Global, HttpModule } from '@nestjs/common';
import { RequestService } from './request.service';

@Global()
@Module({
  imports: [ HttpModule ],
  providers: [RequestService],
  exports: [ RequestService]
})
export class RequestModule {}
