import { Module } from '@nestjs/common';
import { BidderController } from './bidder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidderService } from './bidder.service';
import { BidderEntity } from './bidder.entity';
import { AdParamEntity } from '../ad-param/ad-param.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BidderEntity, AdParamEntity])],
  controllers: [BidderController],
  providers: [BidderService],
})
export class BidderModule {}
