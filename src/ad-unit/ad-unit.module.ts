import { Module } from '@nestjs/common';
import { AdUnitController } from './ad-unit.controller';
import { AdUnitService } from './ad-unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdUnitEntity } from '../ad-unit/ad-unit.entity';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';
import { AdUnitBiddersParams } from '../ad-unit/ad-unit-bidders-params.entity';
// import { AdUnitNumberEntiry } from 'src/ad-unit-number/ad-unit-number.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdUnitEntity,
      AdUnitSizeEntity,
      AdUnitBiddersParams,
      // AdUnitNumberEntiry,
    ]),
  ],
  controllers: [AdUnitController],
  providers: [AdUnitService],
})
export class AdUnitModule {}
