import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SiteEntity } from '../site/site.entity';

@Entity()
export class SGranularityEntity {
  @PrimaryGeneratedColumn() // for primary key
  id: number;

  @Column()
  minimum: string;

  @Column()
  maximum: string;

  @Column()
  increment: string;

  @ManyToOne(() => SiteEntity, (site) => site.siteGranularity)
  site: SiteEntity;
}
