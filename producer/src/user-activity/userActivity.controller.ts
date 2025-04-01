import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserActivityDto } from './dto/createUser-activityDto';
import { UserActivityService } from './userActivity.service';

@Controller('user-activity')
export class UserActivityController {
  constructor(private readonly userActivityService: UserActivityService) {}
  @Post()
  async createUserActivity(
    @Body() createUserActivityDto: CreateUserActivityDto,
  ) {
    return this.userActivityService.createUserActivity(createUserActivityDto);
  }
}
