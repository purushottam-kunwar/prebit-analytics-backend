import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BidderEntity } from './bidder.entity';
import { AdParamEntity } from '../ad-param/ad-param.entity';
import { CreateBidderDto } from './dto/create-ad-bidder.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';
import { UpdateBiddersDto } from '../bidder/dto/update-ad-bidder.dto';

@Injectable()
export class BidderService {
  constructor(
    @InjectRepository(BidderEntity)
    private readonly bidderRepository: Repository<BidderEntity>,
    @InjectRepository(AdParamEntity)
    private readonly adParamRepository: Repository<AdParamEntity>,
  ) {}

  async createBidder(createBidderDto: CreateBidderDto): Promise<BidderEntity> {
    const bidder = new BidderEntity();
    bidder.email = createBidderDto.email;
    bidder.name = createBidderDto.name;
    const newBidder = await this.bidderRepository.save(bidder);

    for (const param of createBidderDto.adParams) {
      const adParam = new AdParamEntity();
      adParam.name = param.name;
      adParam.bidder = bidder;
      await this.adParamRepository.save(adParam);

      // bidder.adParams.push(adParam);
    }

    return newBidder;
  }

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.bidderRepository.find({
      relations: ['adParams'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const bidder = await this.bidderRepository.findOne(id, {
      relations: ['adParams'],
    });
    if (!bidder) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return bidder;
  }

  async remove(id: string) {
    const bidder = await this.findOne(id);
    return this.bidderRepository.remove(bidder);
  }
}
