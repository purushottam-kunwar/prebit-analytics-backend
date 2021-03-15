import { IsString } from 'class-validator';

import { CreateSchainDto } from './create-site-chain.dto';
import { CreateGranularDto } from './create-site-granular.dto';

export class CreateAdSiteDto {
  @IsString()
  readonly website: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly contact: string;

  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly bidders: object[];

  @IsString()
  readonly countries: string;

  @IsString()
  readonly currency: string;

  readonly siteGranularity: CreateGranularDto[];

  readonly schainConfig: CreateSchainDto[];

  @IsString()
  readonly enableAnalytics: boolean;
}
