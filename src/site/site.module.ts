import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { SiteEntity } from './site.entity';
import { SGranularityEntity } from '../site-granularity/site-granularity.entity';
import { SChainEntity } from '../site-chain/site-chain.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([SiteEntity, SGranularityEntity, SChainEntity]),
  ],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
