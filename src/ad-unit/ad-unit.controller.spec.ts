import { Test, TestingModule } from '@nestjs/testing';
import { AdUnitController } from './ad-unit.controller';

describe('AdUnitController', () => {
  let controller: AdUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdUnitController],
    }).compile();

    controller = module.get<AdUnitController>(AdUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
