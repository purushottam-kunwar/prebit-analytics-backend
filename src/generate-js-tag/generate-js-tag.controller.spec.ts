import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJsTagController } from './generate-js-tag.controller';

describe('GenerateJsTagController', () => {
  let controller: GenerateJsTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateJsTagController],
    }).compile();

    controller = module.get<GenerateJsTagController>(GenerateJsTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
