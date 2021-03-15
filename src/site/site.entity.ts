import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SChainEntity } from '../site-chain/site-chain.entity';
import { SGranularityEntity } from '../site-granularity/site-granularity.entity';

@Entity()
export class SiteEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  website: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contact: string;

  @Column()
  countries: string;

  @Column()
  currency: string;

  @Column()
  enableAnalytics: boolean;

  // @JoinTable()
  @OneToMany(() => SGranularityEntity, (siteGarnular) => siteGarnular.site, {
    cascade: true, // insert into database
  })
  siteGranularity: SGranularityEntity[];

  @OneToMany(() => SChainEntity, (schain) => schain.site, {
    cascade: true, //insert into database
  })
  schainConfigs: SChainEntity[];
}
