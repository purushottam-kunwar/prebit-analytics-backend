import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BidderModule } from './bidder/bidder.module';
import { AdParamModule } from './ad-param/ad-param.module';
import { SiteModule } from './site/site.module';
import { SiteGranularityModule } from './site-granularity/site-granularity.module';
import { SiteChainModule } from './site-chain/site-chain.module';
import { AdUnitModule } from './ad-unit/ad-unit.module';
import { SiteBiddersModule } from './site-bidders/site-bidders.module';
import { GenerateJsTagModule } from './generate-js-tag/generate-js-tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BidderModule,
    AdParamModule,
    SiteModule,
    AdUnitModule,
    SiteGranularityModule,
    SiteChainModule,
    SiteBiddersModule,
    GenerateJsTagModule,
  ],
})
export class AppModule {}
