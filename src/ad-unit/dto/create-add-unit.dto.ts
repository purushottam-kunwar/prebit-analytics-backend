import { IsString } from 'class-validator';

export class CreateAdUnitDto {
  @IsString()
  readonly websiteUrl: string;

  @IsString()
  readonly adUnitName: string;

  @IsString()
  readonly divName: string;

  @IsString()
  readonly adUnitPathId: string;

  @IsString()
  readonly adUnitSize: string;
}
