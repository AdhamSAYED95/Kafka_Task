import { Module } from '@nestjs/common';
import { UserActivityController } from './userActivity.controller';
import { UserActivityService } from './user-activity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLog, UserSchema } from './schemas/userLog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserLog.name, schema: UserSchema }]),
  ],
  controllers: [UserActivityController],
  providers: [UserActivityService],
})
export class UserActivityModule {}
