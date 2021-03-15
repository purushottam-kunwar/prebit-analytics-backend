import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AdUnitEntity } from '../ad-unit/ad-unit.entity';

@Entity()
export class AdUnitSizeEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  height: string;

  @Column()
  width: string;

  @Column()
  both: string;

  @ManyToOne(() => AdUnitEntity, (site) => site.adUnitSize)
  adUnit: AdUnitEntity;
}
