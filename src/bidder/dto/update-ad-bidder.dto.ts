import { PartialType } from '@nestjs/mapped-types';
import { CreateBidderDto } from './create-ad-bidder.dto';

export class UpdateBiddersDto extends PartialType(CreateBidderDto) {}
