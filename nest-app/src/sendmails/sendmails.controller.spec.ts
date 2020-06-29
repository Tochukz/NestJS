import { Test, TestingModule } from '@nestjs/testing';
import { SendmailsController } from './sendmails.controller';

describe('Sendmails Controller', () => {
  let controller: SendmailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendmailsController],
    }).compile();

    controller = module.get<SendmailsController>(SendmailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
