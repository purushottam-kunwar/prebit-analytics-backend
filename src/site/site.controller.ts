import {
  Body,
  Controller,
  Query,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Logger,
} from '@nestjs/common';
import { SiteEntity } from './site.entity';
import { SiteService } from './site.service';
import { CreateAdSiteDto } from './dto/create-ad-site.dto';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Controller('site')
export class SiteController {
  private logger = new Logger('SiteController');

  constructor(private siteService: SiteService) {}

  @Post()
  createSite(@Body() createAdSiteDto: CreateAdSiteDto): Promise<SiteEntity> {
    this.logger.verbose(
      `creating a new task. Data: ${JSON.stringify(createAdSiteDto)}`,
    );
    return this.siteService.createSite(createAdSiteDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.siteService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.siteService.findOne('' + id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteService.remove(id);
  }
}
