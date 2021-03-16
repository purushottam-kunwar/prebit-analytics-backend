import { BidderEntity } from 'src/bidder/bidder.entity';
import { SiteEntity } from '../site.entity';

export class CreateSiteBiddersDto {
  readonly site: SiteEntity;

  readonly bidder: BidderEntity;
}
