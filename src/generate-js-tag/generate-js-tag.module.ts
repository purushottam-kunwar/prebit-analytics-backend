import { Module } from '@nestjs/common';
import { GenerateJsTagService } from './generate-js-tag.service';
import { GenerateJsTagController } from './generate-js-tag.controller';
import { AdUnitEntity } from '../ad-unit/ad-unit.entity';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';
import { AdUnitBiddersParams } from '../ad-unit/ad-unit-bidders-params.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdUnitEntity,
      AdUnitSizeEntity,
      AdUnitBiddersParams,
    ]),
  ],
  providers: [GenerateJsTagService],
  controllers: [GenerateJsTagController],
})
export class GenerateJsTagModule {}
