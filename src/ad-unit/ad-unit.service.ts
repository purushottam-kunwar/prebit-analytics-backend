import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdUnitEntity } from './ad-unit.entity';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';
import { CreateAdUnitDto } from './dto/create-add-unit.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Injectable()
export class AdUnitService {
  constructor(
    @InjectRepository(AdUnitEntity)
    private readonly adUnitReposatory: Repository<AdUnitEntity>,
    @InjectRepository(AdUnitSizeEntity)
    private readonly adUnitSizeReposatory: Repository<AdUnitSizeEntity>,
  ) {}

  async createAdUnit(createAdUnitDto: CreateAdUnitDto): Promise<AdUnitEntity> {
    const adUnit = new AdUnitEntity();
    adUnit.websiteUrl = createAdUnitDto.websiteUrl;
    adUnit.adUnitName = createAdUnitDto.adUnitName;
    adUnit.adUnitPathId = createAdUnitDto.adUnitPathId;
    adUnit.divName = createAdUnitDto.divName;
    const newAdUnit = await this.adUnitReposatory.save(adUnit);
    console.log('newAdUnit', newAdUnit);
    console.log('createAdUnitDto.adUnitSize', createAdUnitDto.adUnitSize);

    for (const adUnitSize of createAdUnitDto.adUnitSize) {
      const adUnitSizeData = new AdUnitSizeEntity();
      adUnitSizeData.height = adUnitSize.height;
      adUnitSizeData.width = adUnitSize.width;
      adUnitSizeData.both = adUnitSize.both;
      adUnitSizeData.adUnit = newAdUnit;

      const newSChain = await this.adUnitSizeReposatory.save(adUnitSizeData);
      console.log('newSChain', newSChain);
    }

    return newAdUnit;
  }
  // findAll(paginationQuery: PaginationQueryDto) {
  findAll(paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.adUnitReposatory.find({
      // relations: ['adParams'],
      // skip: offset,
      // take: limit,
    });
  }

  async findOne(id: string) {
    const adUnit = await this.adUnitReposatory.findOne(id, {
      // relations: ['flavors'],
    });
    if (!adUnit) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return adUnit;
  }

  async remove(id: string) {
    const adUnit = await this.findOne(id);
    return this.adUnitReposatory.remove(adUnit);
  }
}
