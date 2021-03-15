import { IsString } from 'class-validator';

export class CreateSchainDto {
  @IsString()
  readonly asi: string;

  @IsString()
  readonly sid: string;

  @IsString()
  readonly hp: string;
}
