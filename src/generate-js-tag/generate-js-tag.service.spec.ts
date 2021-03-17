import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJsTagService } from './generate-js-tag.service';

describe('GenerateJsTagService', () => {
  let service: GenerateJsTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateJsTagService],
    }).compile();

    service = module.get<GenerateJsTagService>(GenerateJsTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
