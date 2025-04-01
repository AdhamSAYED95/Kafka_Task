import { Module } from '@nestjs/common';
import { UserActivityModule } from './user-activity/user-activity.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [UserActivityModule, KafkaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
