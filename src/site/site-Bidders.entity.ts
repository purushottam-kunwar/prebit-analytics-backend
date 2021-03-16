import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BidderEntity } from '../bidder/bidder.entity';
import { SiteEntity } from '../site/site.entity';

@Entity()
export class SiteBiddersEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SiteEntity, (site) => site.id)
  site: SiteEntity;

  @ManyToOne(() => BidderEntity, (bidder) => bidder.id)
  bidder: BidderEntity;
}
