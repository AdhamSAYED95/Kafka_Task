import { Inject, Injectable } from '@nestjs/common';
import { ClientKafkaProxy } from '@nestjs/microservices';
import { CreateUserActivityDto } from 'src/user-activity/dto/createUser-activityDto';

@Injectable()
export class KafkaProducerService {
  constructor(@Inject('KAFKA_CLIENT') private kafkaClient: ClientKafkaProxy) {}

  async sendMessage(message: CreateUserActivityDto) {
    this.kafkaClient.emit('message.created', JSON.stringify(message));
  }
}
