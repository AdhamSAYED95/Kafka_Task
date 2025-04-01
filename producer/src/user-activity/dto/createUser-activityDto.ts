import { IsString } from 'class-validator';

export class CreateUserActivityDto {
  @IsString()
  userName: string;
  @IsString()
  activityType: string;
}
