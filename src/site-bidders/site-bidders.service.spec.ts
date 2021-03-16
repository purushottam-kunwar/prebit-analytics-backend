import { Test, TestingModule } from '@nestjs/testing';
import { SiteBiddersService } from './site-bidders.service';

describe('SiteBiddersService', () => {
  let service: SiteBiddersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteBiddersService],
    }).compile();

    service = module.get<SiteBiddersService>(SiteBiddersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
