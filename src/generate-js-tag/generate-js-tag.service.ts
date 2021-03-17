import { Injectable } from '@nestjs/common';
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
}
