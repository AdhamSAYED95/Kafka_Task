import { Injectable } from '@nestjs/common';
import { CreateUserActivityDto } from './dto/createUser-activityDto';
import { KafkaProducerService } from 'src/kafka/kafkaProducer.service';

@Injectable()
export class UserActivityService {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}
  async createUserActivity(createUserActivityDto: CreateUserActivityDto) {
    this.kafkaProducerService.sendMessage(createUserActivityDto);
    console.log(createUserActivityDto);
    return 'hello activity';
  }
}
