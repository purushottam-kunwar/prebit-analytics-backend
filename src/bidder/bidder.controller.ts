import {
  Body,
  Controller,
  Get,
  Query,
  Patch,
  Delete,
  Post,
  Param,
  Logger,
} from '@nestjs/common';
import { BidderEntity } from './bidder.entity';
import { BidderService } from './bidder.service';
import { CreateBidderDto } from './dto/create-ad-bidder.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';
import { UpdateBiddersDto } from '../bidder/dto/update-ad-bidder.dto';

@Controller('bidder')
export class BidderController {
  private logger = new Logger('BidderController');

  constructor(private bidderService: BidderService) {}

  @Post()
  createBidder(
    @Body() createAdBiddersDto: CreateBidderDto,
  ): Promise<BidderEntity> {
    this.logger.verbose(
      `creating a new task. Data: ${JSON.stringify(createAdBiddersDto)}`,
    );
    return this.bidderService.createBidder(createAdBiddersDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.bidderService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bidderService.findOne('' + id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bidderService.remove(id);
  }
}
