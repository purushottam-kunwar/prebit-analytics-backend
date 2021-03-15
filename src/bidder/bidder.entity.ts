import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { AdParamEntity } from '../ad-param/ad-param.entity';

@Entity()
export class BidderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => AdParamEntity, (param: AdParamEntity) => param.bidder, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  adParams: AdParamEntity[];
}
