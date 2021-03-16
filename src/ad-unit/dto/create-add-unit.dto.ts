import { IsString } from 'class-validator';
import { CreateAdUnitSizeDto } from '../dto/create-ad-unit-size.dto';
import { CreateAdUnitBiddersParamsDto } from '../dto/create-ad-unit-bidders-params.dto';
export class CreateAdUnitDto {
  @IsString()
  readonly websiteUrl: string;

  @IsString()
  readonly adUnitName: string;

  @IsString()
  readonly divName: string;

  @IsString()
  readonly adUnitPathId: string;

  readonly adUnitBiddersParams: CreateAdUnitBiddersParamsDto[];

  readonly adUnitSize: CreateAdUnitSizeDto[];
}
