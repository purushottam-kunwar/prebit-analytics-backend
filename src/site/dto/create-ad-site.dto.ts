import { IsString } from 'class-validator';
import { BidderEntity } from 'src/bidder/bidder.entity';

import { CreateSchainDto } from './create-site-chain.dto';
import { CreateGranularDto } from './create-site-granular.dto';
import { CreateSiteBiddersDto } from '../dto/create-site-bidders.dto';

export class CreateAdSiteDto {
  @IsString()
  readonly website: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly bidders: CreateSiteBiddersDto[];

  @IsString()
  readonly countries: string;

  @IsString()
  readonly currency: string;

  readonly siteGranularity: CreateGranularDto[];

  readonly schainConfig: CreateSchainDto[];

  @IsString()
  readonly enableAnalytics: boolean;
}
