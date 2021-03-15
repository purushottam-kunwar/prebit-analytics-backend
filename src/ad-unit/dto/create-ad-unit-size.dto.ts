import { IsString } from 'class-validator';

export class CreateAdUnitSizeDto {
  @IsString()
  readonly height: string;

  @IsString()
  readonly width: string;

  @IsString()
  readonly both: string;
}
