import { Repository, EntityRepository } from 'typeorm';

import { AdParamEntity } from './ad-param.entity';

@EntityRepository(AdParamEntity)
export class AdParamRepository extends Repository<AdParamEntity> {}
