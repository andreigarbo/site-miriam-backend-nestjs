import { Controller, Get, Post, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get()
  async getAnalyticsData() {
    return this.analyticsService.getAnalyticsData();
  }

  @Post()
  reportVisit(@Req() request: Request): string {
    return this.analyticsService.getAnalyticsData();
  }
}
