import { Test, TestingModule } from '@nestjs/testing';
import { AdUnitService } from './ad-unit.service';

describe('AdUnitService', () => {
  let service: AdUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdUnitService],
    }).compile();

    service = module.get<AdUnitService>(AdUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
