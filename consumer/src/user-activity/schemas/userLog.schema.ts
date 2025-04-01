import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserLogDocument = HydratedDocument<UserLog>;

@Schema({ timestamps: { createdAt: 'processedAt' }, autoIndex: true })
export class UserLog {
  @Prop()
  userName: string;

  @Prop()
  activityType: string;
}

const TheSchema = SchemaFactory.createForClass(UserLog);

TheSchema.index({ processedAt: 1 });

export const UserSchema = TheSchema;
