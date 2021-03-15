import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SiteEntity } from './site.entity';
import { CreateAdSiteDto } from './dto/create-ad-site.dto';
import { SGranularityEntity } from 'src/site-granularity/site-granularity.entity';
import { SChainEntity } from 'src/site-chain/site-chain.entity';
import { PaginationQueryDto } from '../commom/dto/pagination-query.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private readonly siteRepository: Repository<SiteEntity>,
    @InjectRepository(SGranularityEntity)
    private readonly sGranularityRepository: Repository<SGranularityEntity>,
    @InjectRepository(SChainEntity)
    private readonly sChianConfigRepository: Repository<SChainEntity>,
  ) {}

  async createSite(createAdSiteDto: CreateAdSiteDto): Promise<SiteEntity> {
    const site = new SiteEntity();
    site.website = createAdSiteDto.website;
    site.email = createAdSiteDto.email;
    site.name = createAdSiteDto.name;
    site.contact = createAdSiteDto.contact;
    site.countries = createAdSiteDto.countries;
    site.currency = createAdSiteDto.currency;
    site.enableAnalytics = createAdSiteDto.enableAnalytics;
    const newSite = await this.siteRepository.save(site);
    console.log('newSite', newSite);
    console.log('schainConfig', createAdSiteDto.schainConfig);
    console.log('siteGranularity', createAdSiteDto.siteGranularity);

    for (const schainConfig of createAdSiteDto.schainConfig) {
      const sChain = new SChainEntity();
      sChain.asi = schainConfig.asi;
      sChain.sid = schainConfig.sid;
      sChain.hp = schainConfig.hp;
      sChain.site = newSite;
      const newSChain = await this.sChianConfigRepository.save(sChain);
      console.log('newSChain', newSChain);
    }

    for (const siteGranularity of createAdSiteDto.siteGranularity) {
      console.log('siteGranularityparam', siteGranularity);
      const granularity = new SGranularityEntity();
      granularity.minimum = siteGranularity.minimum;
      granularity.maximum = siteGranularity.maximum;
      granularity.increment = siteGranularity.increment;
      granularity.site = newSite;
      const newGranularity = await this.sGranularityRepository.save(
        granularity,
      );
      console.log('newGranularity', newGranularity);
    }

    return newSite;
  }

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.siteRepository.find({
      relations: ['siteGranularity', 'schainConfigs'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const site = await this.siteRepository.findOne(id, {
      relations: ['siteGranularity', 'schainConfigs'],
    });
    if (!site) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return site;
  }

  async remove(id: string) {
    const site = await this.findOne(id);
    return this.siteRepository.remove(site);
  }
}
