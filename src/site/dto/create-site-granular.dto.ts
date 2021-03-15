import { IsString } from 'class-validator';

export class CreateGranularDto {
  @IsString()
  readonly minimum: string;

  @IsString()
  readonly maximum: string;

  @IsString()
  readonly increment: string;
}
