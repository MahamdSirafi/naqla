import { Module, Provider } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MESSAGE_TYPES } from './interfaces/type';
import { MessageRepository } from './repositories/message.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { SubOrdersModule } from '@models/sub-orders/sub-orders.module';
import { MessageGateway } from './gateways/messages.gateway';
import { ConfigModule } from '@nestjs/config';
import { JwtConfig } from '@config/app';
import { MessagesController } from './controllers/messages.controller';

export const MessagesServiceProvider: Provider = {
  provide: MESSAGE_TYPES.service,
  useClass: MessagesService,
};

export const MessageRepositoryProvider: Provider = {
  provide: MESSAGE_TYPES.repository,
  useClass: MessageRepository,
};

@Module({
  imports: [
    SubOrdersModule,
    TypeOrmModule.forFeature([Message]),
    ConfigModule.forFeature(JwtConfig),
  ],
  controllers: [MessagesController],
  providers: [
    MessageRepositoryProvider,
    MessagesServiceProvider,
    MessageGateway,
  ],
})
export class MessagesModule {}