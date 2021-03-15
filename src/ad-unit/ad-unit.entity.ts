import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';

@Entity()
export class AdUnitEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  websiteUrl: string;

  @Column()
  adUnitName: string;

  @Column()
  divName: string;

  @Column()
  adUnitPathId: string;

  @OneToMany(() => AdUnitSizeEntity, (adUnitSize) => adUnitSize.adUnit, {
    cascade: true, //insert into database
  })
  adUnitSize: AdUnitSizeEntity[];
}
