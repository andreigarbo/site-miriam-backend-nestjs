import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnalyticsEntity } from './analytics.entity';
import { AnalyticsData } from './analytics.interface';

import { Repository, getRepository, DeleteResult } from 'typeorm';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(AnalyticsEntity)
    private readonly analyticsRepository: Repository<AnalyticsEntity>,
  ) {}

  async getAnalyticsData(): Promise<AnalyticsData> {
    const queryBuilder =
      await getRepository(AnalyticsEntity).createQueryBuilder('analytics');
  }
}
