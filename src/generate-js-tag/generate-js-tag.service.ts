import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdUnitEntity } from 'src/ad-unit/ad-unit.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Injectable()
export class GenerateJsTagService {
  constructor(
    @InjectRepository(AdUnitEntity)
    private readonly adUnitReposatory: Repository<AdUnitEntity>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.adUnitReposatory.find({
      relations: ['adUnitBiddersParams', 'adUnitSize'],
      // skip: offset,
      // take: limit,
    });
  }

  async findOne(id: string) {
    const adUnit = await this.adUnitReposatory.findOne(id, {
      relations: ['adUnitBiddersParams', 'adUnitSize'],
    });
    if (!adUnit) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    console.log('dd', adUnit);
    const obj = {
      id: adUnit.id,
      websiteUrl: adUnit.websiteUrl,
      adUnitName: adUnit.adUnitName,
      bidderName1: adUnit.adUnitBiddersParams[0].adUnit,
      paramsName1: adUnit.adUnitBiddersParams[0].paramsName,
      paramsValue1: adUnit.adUnitBiddersParams[0].paramsValue,
      paramsName2: adUnit.adUnitBiddersParams[1].paramsName,
      paramsValue2: adUnit.adUnitBiddersParams[1].paramsValue,
      adUnitNumber: adUnit.adUnitSize[0].adUnitName,
      height: adUnit.adUnitSize[0].height,
      width: adUnit.adUnitSize[0].width,
      both: adUnit.adUnitSize[0].both,
      height1: adUnit.adUnitSize[1].height,
      width1: adUnit.adUnitSize[1].width,
      both1: adUnit.adUnitSize[1].both,
      height2: adUnit.adUnitSize[2].height,
      width2: adUnit.adUnitSize[2].width,
      both2: adUnit.adUnitSize[2].both,
      height3: adUnit.adUnitSize[3].height,
      width4: adUnit.adUnitSize[3].width,
      both3: adUnit.adUnitSize[3].both,
    };
    console.log('OB', obj);
    return obj;
  }
}
