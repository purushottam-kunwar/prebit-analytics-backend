import { Module } from '@nestjs/common';
import { SiteBiddersService } from './site-bidders.service';

@Module({
  providers: [SiteBiddersService],
})
export class SiteBiddersModule {}
