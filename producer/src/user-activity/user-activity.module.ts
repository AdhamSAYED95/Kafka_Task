import { Module } from '@nestjs/common';
import { UserActivityController } from './userActivity.controller';
import { UserActivityService } from './userActivity.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [KafkaModule],
  controllers: [UserActivityController],
  providers: [UserActivityService],
})
export class UserActivityModule {}
