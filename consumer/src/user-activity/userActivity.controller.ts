import { Controller, Get, Query } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
// Your service to fetch logs

@Controller('user-activity')
export class UserActivityController {
  constructor(private readonly userActivityService: UserActivityService) {}

  @Get()
  async getUserActivities(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
    @Query('userName') userName?: string,
    @Query('activityType') activityType?: string,
    @Query('sort') sort?: 'asc' | 'desc',
  ) {
    return this.userActivityService.findAllLogs({
      page: Number(page),
      limit: Number(limit),
      userName,
      activityType,
      sort: sort || 'desc',
    });
  }
}
