import { Test, TestingModule } from '@nestjs/testing';
import { SsEventsController } from './ss-events.controller';

describe('SsEventsController', () => {
  let controller: SsEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsEventsController],
    }).compile();

    controller = module.get<SsEventsController>(SsEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
