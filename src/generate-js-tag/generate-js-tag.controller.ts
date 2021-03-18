import { Controller, Logger } from '@nestjs/common';
import { GenerateJsTagService } from './generate-js-tag.service';
import { Query, Get, Param } from '@nestjs/common';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Controller('generate-js-tag')
export class GenerateJsTagController {
  private logger = new Logger('GenerateJsTagController');

  constructor(private gererateJsTagService: GenerateJsTagService) {}
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.gererateJsTagService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gererateJsTagService.findOne('' + id);
  }
}
