import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserActivityModule } from './user-activity/user-activity.module';
import { DataBaseConnectionModule } from './database/dbConnection.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLog, UserSchema } from './user-activity/schemas/userLog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserLog.name, schema: UserSchema }]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserActivityModule,
    DataBaseConnectionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
