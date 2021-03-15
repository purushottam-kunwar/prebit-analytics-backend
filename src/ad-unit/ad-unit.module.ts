import { Module } from '@nestjs/common';
import { AdUnitController } from './ad-unit.controller';
import { AdUnitService } from './ad-unit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdUnitEntity } from '../ad-unit/ad-unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdUnitEntity])],
  controllers: [AdUnitController],
  providers: [AdUnitService],
})
export class AdUnitModule {}
