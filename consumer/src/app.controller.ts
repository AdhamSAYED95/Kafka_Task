import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { UserLog } from './user-activity/schemas/userLog.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(@InjectModel(UserLog.name) private userModel: Model<UserLog>) {}
  @EventPattern('message.created')
  async handleMessageCreation(@Payload() message: any) {
    console.log(message);
    await this.userModel.create(message);
  }
}
