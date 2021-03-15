import { IsString } from 'class-validator';
import { CreateAdUnitSizeDto } from '../dto/create-ad-unit-size.dto';

export class CreateAdUnitDto {
  @IsString()
  readonly websiteUrl: string;

  @IsString()
  readonly adUnitName: string;

  @IsString()
  readonly divName: string;

  @IsString()
  readonly adUnitPathId: string;

  readonly adUnitSize: CreateAdUnitSizeDto[];
}
