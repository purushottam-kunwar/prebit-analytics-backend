import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdUnitEntity } from './ad-unit.entity';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';
import { CreateAdUnitDto } from './dto/create-add-unit.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';
import { AdUnitBiddersParams } from './ad-unit-bidders-params.entity';

@Injectable()
export class AdUnitService {
  constructor(
    @InjectRepository(AdUnitEntity)
    private readonly adUnitReposatory: Repository<AdUnitEntity>,
    @InjectRepository(AdUnitSizeEntity)
    private readonly adUnitSizeReposatory: Repository<AdUnitSizeEntity>,
    @InjectRepository(AdUnitBiddersParams)
    private readonly adUnitBiddersReposatory: Repository<AdUnitBiddersParams>,
  ) {}

  async createAdUnit(createAdUnitDto: CreateAdUnitDto): Promise<AdUnitEntity> {
    const adUnit = new AdUnitEntity();
    adUnit.websiteUrl = createAdUnitDto.websiteUrl;
    adUnit.adUnitName = createAdUnitDto.adUnitName;
    adUnit.adUnitPathId = createAdUnitDto.adUnitPathId;
    adUnit.divName = createAdUnitDto.divName;
    const newAdUnit = await this.adUnitReposatory.save(adUnit);
    console.log('createAdUnitDto.adUnitSize', createAdUnitDto.adUnitSize);
    console.log(
      'createAdUnitDto.adUnitbidderParams',
      createAdUnitDto.adUnitBiddersParams,
    );

    for (const adUnitSize of createAdUnitDto.adUnitSize) {
      const adUnitSizeData = new AdUnitSizeEntity();
      adUnitSizeData.height = adUnitSize.height;
      adUnitSizeData.width = adUnitSize.width;
      adUnitSizeData.both = adUnitSize.both;
      adUnitSizeData.adUnit = newAdUnit;

      const newSChain = await this.adUnitSizeReposatory.save(adUnitSizeData);
      console.log('newSChain', newSChain);
    }

    for (const adUnitParams of createAdUnitDto.adUnitBiddersParams) {
      const data = new AdUnitBiddersParams();
      data.paramsName = adUnitParams.paramsName;
      data.paramsValue = adUnitParams.paramsValue;
      data.adUnit = newAdUnit;
      await this.adUnitBiddersReposatory.save(data);
    }

    return newAdUnit;
  }
  // findAll(paginationQuery: PaginationQueryDto) {
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
    return adUnit;
  }

  async remove(id: string) {
    const adUnit = await this.findOne(id);
    return this.adUnitReposatory.remove(adUnit);
  }
}
