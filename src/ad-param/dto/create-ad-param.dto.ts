import { IsString } from 'class-validator';

export class CreateAdParam {
  @IsString()
  readonly name: string;
}
