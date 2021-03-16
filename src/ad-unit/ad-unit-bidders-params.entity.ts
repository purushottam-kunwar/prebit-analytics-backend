import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AdUnitEntity } from './ad-unit.entity';

@Entity()
export class AdUnitBiddersParams {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paramsName: string;

  @Column()
  paramsValue: string;

  @ManyToOne(() => AdUnitEntity, (adUnit) => adUnit.adUnitBiddersParams)
  adUnit: AdUnitEntity;
}
