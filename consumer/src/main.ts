import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'notifications-service',
          brokers: ['kafka:9092'],
        },
        consumer: {
          groupId: 'notifications-consumer',
        },
      },
    },
  );

  const httpApp = await NestFactory.create(AppModule);

  await httpApp.listen(3001);

  await app.listen();
}
bootstrap();
