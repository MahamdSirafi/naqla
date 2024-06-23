import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { User } from '../entities/user.entity';
import { defaultPhotoUrl, item_not_found } from '@common/constants';
import { IUsersService } from '../interfaces/services/users.service.interface';
import { PaginatedResponse } from '@common/types';
import { UserPhoto } from '../entities/user-photo.entity';
import { IUserRepository } from '../interfaces/repositories/user.repository.interface';
import { USER_TYPES } from '../interfaces/type';
import { UpdateUserPhoneDto } from '../../../auth-user';
import { ROLE_TYPES } from '@models/roles/interfaces/type';
import { IRolesService } from '@models/roles/interfaces/services/roles.service.interface';
import { IPhotoRepository, IWalletRepository } from '@common/interfaces';
import { UserWallet } from '../entities/user-wallet.entity';
import { ORDER_TYPES } from '@models/orders/interfaces/type';
import { Entities, ROLE } from '@common/enums';
import { IOrdersService } from '@models/orders/interfaces/services/orders.service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(USER_TYPES.repository.user)
    private userRepository: IUserRepository,
    @Inject(USER_TYPES.repository.photo)
    private userPhotoRepository: IPhotoRepository<UserPhoto>,
    @Inject(USER_TYPES.repository.wallet)
    private userWalletRepository: IWalletRepository<UserWallet>,
    @Inject(ROLE_TYPES.service) private rolesService: IRolesService,

    @Inject(ORDER_TYPES.service)
    private ordersService: IOrdersService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const role = await this.rolesService.findByName(ROLE.USER);
    let photo;
    if (dto.photo)
      photo = await this.userPhotoRepository.uploadPhoto(dto.photo);
    else photo = await this.userPhotoRepository.uploadPhoto(defaultPhotoUrl);
    const wallet = this.userWalletRepository.create();
    return this.userRepository.create(dto, wallet, photo, role);
  }

  async find(
    page: number,
    limit: number,
    withDeleted: boolean,
  ): Promise<PaginatedResponse<User> | User[]> {
    return this.userRepository.find(page, limit, withDeleted);
  }

  async staticsUser(
    page: number,
    limit: number,
    withDeleted: boolean,
  ): Promise<any[]> {
    const data = await this.userRepository.staticsUser(
      page,
      limit,
      withDeleted,
    );
    const updateUser = await Promise.all(
      data.data.map(async (user) => {
        const countOrderDelivered =
          await this.ordersService.countOrdersCompletedForUser(user.id);
        return {
          ...user,
          countOrderDelivered,
        };
      }),
    );
    return updateUser;
  }

  async findOne(id: string, withDeleted = false): Promise<User> {
    const user = await this.userRepository.findById(id, withDeleted);
    if (!user) throw new NotFoundException(item_not_found(Entities.User));
    return user;
  }

  async findOneByPhone(id: string, withDeleted?: boolean): Promise<User> {
    const user = await this.userRepository.findOneByPhone(id, withDeleted);
    return user;
  }

  async updateMe(user: User, dto: UpdateUserDto): Promise<User> {
    const photo = await this.userPhotoRepository.uploadPhoto(dto.photo);
    const updateUser = await this.userRepository.update(user, dto, photo);
    return updateUser;
  }

  async deleteMe(user: User): Promise<void> {
    const toDelete = await this.userRepository.findByIdForDelete(user.id);
    await this.userRepository.delete(toDelete);
  }

  async getMyPhotos(user: User): Promise<UserPhoto[]> {
    return this.userPhotoRepository.findPhotosByOwner(user.id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const photo = await this.userPhotoRepository.uploadPhoto(dto.photo);
    const updateUser = await this.userRepository.update(user, dto, photo);
    return updateUser;
  }

  async updatePhone(user: User, dto: UpdateUserPhoneDto): Promise<User> {
    return this.userRepository.updatePhone(user, dto);
  }

  // async recover(id: string): Promise<User> {
  //   const user = await this.findOne(id, true);
  //   if (!user) throw new NotFoundException(item_not_found(Entities.User));
  //   await this.userRepository.recover(user);
  //   return user;
  // }

  confirm(nonConfirmedUser: User): Promise<User> {
    return this.userRepository.confirm(nonConfirmedUser);
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findByIdForDelete(id);
    await this.userRepository.delete(user);
    return;
  }

  async validate(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new UnauthorizedException('The user is not here');
    }
    return user;
  }
}
