import {
  Body,
  Controller,
  Logger,
  Post,
  Get,
  Delete,
  Query,
  Param,
} from '@nestjs/common';
import { CreateAdUnitDto } from './dto/create-add-unit.dto';
import { AdUnitEntity } from './ad-unit.entity';
import { AdUnitService } from './ad-unit.service';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Controller('ad-unit')
export class AdUnitController {
  private logger = new Logger('AdUnitController');

  constructor(private adUnitService: AdUnitService) {}

  @Post()
  createAdUnit(
    @Body() createAdUnitDto: CreateAdUnitDto,
  ): Promise<AdUnitEntity> {
    this.logger.verbose(
      `creating the new task: ${JSON.stringify(createAdUnitDto)}`,
    );
    return this.adUnitService.createAdUnit(createAdUnitDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.adUnitService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adUnitService.findOne('' + id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adUnitService.remove(id);
  }
}
