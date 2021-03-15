import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { BidderEntity } from '../bidder/bidder.entity';

@Entity()
export class AdParamEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BidderEntity, (bid: BidderEntity) => bid.adParams, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  bidder: BidderEntity;
}
