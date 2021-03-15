import { IsString, IsNotEmpty } from 'class-validator';

import { CreateAdParam } from '../../ad-param/dto/create-ad-param.dto';

export class CreateBidderDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  readonly mobile: string;

  readonly adParams: CreateAdParam[];
}
