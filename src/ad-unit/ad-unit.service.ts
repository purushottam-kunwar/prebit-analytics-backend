import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdUnitEntity } from './ad-unit.entity';
import { CreateAdUnitDto } from './dto/create-add-unit.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Injectable()
export class AdUnitService {
  constructor(
    @InjectRepository(AdUnitEntity)
    private readonly adUnitReposatory: Repository<AdUnitEntity>,
  ) {}

  async createAdUnit(createAdUnitDto: CreateAdUnitDto): Promise<AdUnitEntity> {
    const adUnit = new AdUnitEntity();
    adUnit.adUnitName = createAdUnitDto.adUnitName;
    adUnit.adUnitPathId = createAdUnitDto.adUnitPathId;
    adUnit.adUnitSize = createAdUnitDto.adUnitSize;
    adUnit.divName = createAdUnitDto.divName;
    adUnit.websiteUrl = createAdUnitDto.websiteUrl;
    const newAdUnit = await this.adUnitReposatory.save(adUnit);
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
