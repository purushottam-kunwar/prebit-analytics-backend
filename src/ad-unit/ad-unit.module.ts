import { Module } from '@nestjs/common';
import { AdUnitController } from './ad-unit.controller';
import { AdUnitService } from './ad-unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdUnitEntity } from '../ad-unit/ad-unit.entity';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdUnitEntity, AdUnitSizeEntity])],
  controllers: [AdUnitController],
  providers: [AdUnitService],
})
export class AdUnitModule {}
