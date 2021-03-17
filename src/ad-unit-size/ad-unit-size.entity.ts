import { AdUnitEntity } from 'src/ad-unit/ad-unit.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { AdUnitNumberEntiry } from '../ad-unit-number/ad-unit-number.entity';

@Entity()
export class AdUnitSizeEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adUnitName: string;

  @Column()
  height: string;

  @Column()
  width: string;

  @Column()
  both: string;

  @ManyToOne(() => AdUnitEntity, (adUnit) => adUnit.adUnitSize)
  adUnit: AdUnitEntity;
}
