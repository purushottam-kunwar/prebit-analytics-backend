import {
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';

import { BidderEntity } from './bidder.entity';
import { CreateBidderDto } from './dto/create-ad-bidder.dto';
import { UpdateBiddersDto } from './dto/update-ad-bidder.dto';

@EntityRepository(BidderEntity)
export class BidderRepository extends Repository<BidderEntity> {
  private logger = new Logger('BidderRepository');

  async getBidders() {
    const query = this.createQueryBuilder('bidder');

    try {
      const bidders = await query.getMany();
      return bidders;
    } catch (err) {
      this.logger.error(`Failed to get bidders `, err.stack);
      throw new InternalServerErrorException();
    }
  }

  async createBidder(createBidderDto: CreateBidderDto) {
    const { name, email } = createBidderDto;
    const bidder = new BidderEntity();
    bidder.name = name;
    bidder.email = email;

    try {
      await bidder.save();
    } catch (err) {
      this.logger.error(
        `Failed to create bidder, Data: ${JSON.stringify(createBidderDto)}`,
        err.stack,
      );
      throw new InternalServerErrorException();
    }

    return bidder;
  }
}
