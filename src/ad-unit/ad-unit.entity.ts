// import { AdUnitNumberEntiry } from 'src/ad-unit-number/ad-unit-number.entity';
import { AdUnitSizeEntity } from 'src/ad-unit-size/ad-unit-size.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { AdUnitSizeEntity } from '../ad-unit-size/ad-unit-size.entity';
import { AdUnitBiddersParams } from './ad-unit-bidders-params.entity';

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

  @OneToMany(() => AdUnitBiddersParams, (adUnitBidder) => adUnitBidder.adUnit, {
    cascade: true, //insert into database
  })
  adUnitBiddersParams: AdUnitBiddersParams[];

  @OneToMany(() => AdUnitSizeEntity, (adUnitNumber) => adUnitNumber.adUnit, {
    cascade: true, //insert into database
  })
  adUnitSize: AdUnitSizeEntity[];
}
