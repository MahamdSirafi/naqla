import { forwardRef, Module, Provider } from '@nestjs/common';
import { SubOrdersService } from './services/sub-orders.service';
import { SubOrdersController } from './controllers/sub-orders.controller';
import { SUB_ORDER_TYPES } from './interfaces/type';
import { SubOrderRepository } from './repositories/sub-order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubOrder } from './entities/sub-order.entity';
import { OrdersModule } from '../orders/orders.module';
import { DriversModule } from '../drivers/drivers.module';
import { SettingsModule } from '@models/settings/settings.module';
import { PaymentsModule } from '@models/payments/payments.module';

export const SubOrdersServiceProvider: Provider = {
  provide: SUB_ORDER_TYPES.service,
  useClass: SubOrdersService,
};

export const SubOrderRepositoryProvider: Provider = {
  provide: SUB_ORDER_TYPES.repository.subOrder,
  useClass: SubOrderRepository,
};

@Module({
  imports: [
    TypeOrmModule.forFeature([SubOrder]),
    DriversModule,
    SettingsModule,
    PaymentsModule,
    forwardRef(() => OrdersModule),
  ],
  controllers: [SubOrdersController],
  providers: [
    SubOrdersServiceProvider,
    SubOrderRepositoryProvider,
    SubOrdersService,
  ],
  exports: [
    SubOrdersServiceProvider,
    SubOrderRepositoryProvider,
    SubOrdersService,
  ],
})
export class SubOrdersModule {}
