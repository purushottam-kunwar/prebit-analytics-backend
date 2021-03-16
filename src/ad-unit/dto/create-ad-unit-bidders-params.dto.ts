import { IsString } from 'class-validator';

export class CreateAdUnitBiddersParamsDto {
  @IsString()
  readonly paramsName: string;

  @IsString()
  readonly paramsValue: string;
}
