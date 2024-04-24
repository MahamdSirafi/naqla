import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ORDER_TYPES } from '../interfaces/type';
import { AddAdvansToOrderDto, CreateOrderDto, UpdateOrderDto } from '../dtos';
import { Order } from '../entities/order.entity';
import { IOrderRepository } from '../interfaces/repositories/order.repository.interface';
import { User } from '../../users/entities/user.entity';
import { IOrdersService } from '../interfaces/services/orders.service.interface';
import { item_not_found } from '../../../common/constants';
import { Entities, ORDER_STATUSES, ROLE } from '../../../common/enums';
// import { IPhotoRepository } from '../../../common/interfaces';
// import { OrderPhoto } from '../entities/order-photo.entity';
import { ADVANTAGE_TYPES } from '../../advantages/interfaces/type';
import { IAdvantagesService } from '../../advantages/interfaces/services/advantages.service.interface';
import { OrderPhotoRepository } from '../repositories/order-photo.repository';
import { IPerson } from '../../../common/interfaces';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(
    @Inject(ORDER_TYPES.repository.order)
    private readonly orderRepository: IOrderRepository,
    @Inject(ORDER_TYPES.repository.photo)
    private readonly orderPhotoRepository: OrderPhotoRepository,
    @Inject(ADVANTAGE_TYPES.service)
    private readonly advantagesService: IAdvantagesService,
  ) {}

  async find(): Promise<Order[]> {
    return this.orderRepository.find();
  }
  async findWaiting(): Promise<Order[]> {
    return this.orderRepository.findWaiting();
  }

  async findOne(id: string, person: IPerson): Promise<Order> {
    if (person.role.name === ROLE.USER)
      return this.findOneForOwner(id, person.id);

    const order = await this.orderRepository.findOne(id);
    if (!order) throw new NotFoundException(item_not_found(Entities.Order));
    return order;
  }

  async findMyOrders(userId: string): Promise<Order[]> {
    return await this.orderRepository.findMyOrder(userId);
  }

  async findOneForOwner(id: string, userId: string): Promise<Order> {
    const order = await this.orderRepository.findOneForOwner(id, userId);
    if (!order) throw new NotFoundException(item_not_found(Entities.Order));
    return order;
  }

  async create(user: User, dto: CreateOrderDto): Promise<Order> {
    const photo = await this.orderPhotoRepository.uploadPhotoMulti(dto.photo);
    const advantages = await this.advantagesService.findInIds(dto.advantages);
    return this.orderRepository.create(user, photo, advantages, dto);
  }

  async update(
    id: string,
    person: IPerson,
    dto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.findOne(id, person);
    const photo = await this.orderPhotoRepository.uploadPhotoMulti(dto.photo);
    return this.orderRepository.update(order, dto, photo);
  }

  async delete(id: string, person: IPerson): Promise<void> {
    const order = await this.findOne(id, person);
    return this.orderRepository.delete(order);
  }

  async addAdvantagesToOrder(
    id: string,
    dto: AddAdvansToOrderDto,
    user: User,
  ): Promise<void> {
    const order = await this.findOneForOwner(id, user.id);
    if (
      order.status === ORDER_STATUSES.WAITING ||
      order.status === ORDER_STATUSES.READY
    ) {
      const advantages = await this.advantagesService.findInIds(dto.advantages);
      return await this.orderRepository.addAdvantageToOrder(order, advantages);
    }
    throw new ForbiddenException(
      'Can not update order advantages after accept the offer',
    );
  }

  async removeAdvantagesFromOrder(
    id: string,
    advantageId: string,
    user: User,
  ): Promise<void> {
    const order = await this.findOneForOwner(id, user.id);
    if (
      order.status === ORDER_STATUSES.WAITING ||
      order.status === ORDER_STATUSES.READY
    ) {
      const advantage = await this.advantagesService.findOne(advantageId);
      return this.orderRepository.removeAdvantageFromOrder(order, advantage);
    }
    throw new ForbiddenException(
      'Can not delete an advantage order after accept the offer',
    );
  }
}
