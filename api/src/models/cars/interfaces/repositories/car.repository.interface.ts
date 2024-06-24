import { Order } from '@models/orders/entities/order.entity';
import { Advantage } from '../../../advantages/entities/advantage.entity';
import { UpdateCarDto } from '../../dtos';
import { CreateCarDto } from '../../dtos/create-car.dto';
import { CarPhoto } from '../../entities/car-photo.entity';
import { Car } from '../../entities/car.entity';
import { Driver } from '../../../drivers/entities/driver.entity';

export interface ICarRepository {
  find(): Promise<Car[]>;
  findMyCar(driverId: string): Promise<Car[]>;
  findOne(id: string): Promise<Car>;
  findOneForOwner(id: string, driverId: string): Promise<Car>;
  findMyCarsForOrder(driverId: string, order: Order): Promise<Car[]>;
  findByIdForDelete(id: string, driverId: string): Promise<Car>;
  create(
    driver: Driver,
    photo: CarPhoto,
    advantages: Advantage[],
    dto: CreateCarDto,
  ): Promise<Car>;
  update(car: Car, dto: UpdateCarDto, photo: CarPhoto): Promise<Car>;
  delete(car: Car): Promise<void>;
  addAdvantageToCar(car: Car, advantages: Advantage[]): Promise<void>;
  countCarForDriver(driverId: string): Promise<number>;
  removeAdvantageFromCar(car: Car, advantage: Advantage): Promise<void>;
}