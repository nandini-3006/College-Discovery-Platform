import { Test, TestingModule } from '@nestjs/testing';
import { CutoffController } from './cutoff.controller';

describe('CutoffController', () => {
  let controller: CutoffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutoffController],
    }).compile();

    controller = module.get<CutoffController>(CutoffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
