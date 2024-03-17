import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { User } from '../entities/user.entity';
import { Entities } from './../../../common/enums';
import { item_not_found } from '../../../common/constants';
import { ICitiesService } from '../../cities/interfaces/services/cities.service.interface';
import { CITY_TYPES } from '../../cities/interfaces/type';
import { IUsersService } from '../interfaces/services/users.service.interface';
import { PaginatedResponse } from '../../../common/types';
import { UserPhoto } from '../entities/user-photo.entity';
import { IUserRepository } from '../interfaces/repositories/user.repository.interface';
import { USER_TYPES } from '../interfaces/type';
import { Role } from '../../roles';
import { UpdateUserPhoneDto } from '../../../auth-user';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(USER_TYPES.repository.user)
    private userRepository: IUserRepository,

    @Inject(CITY_TYPES.service) private citiesService: ICitiesService,
  ) {}

  create(dto: CreateUserDto, role: Role): Promise<User> {
    return this.userRepository.create(dto, role);
  }

  async find(
    page: number,
    limit: number,
    withDeleted: boolean,
  ): Promise<PaginatedResponse<User> | User[]> {
    return this.userRepository.find(page, limit, withDeleted);
  }

  async findOne(id: string, withDeleted = false): Promise<User> {
    const user = await this.userRepository.findOneById(id, withDeleted);
    if (!user) throw new NotFoundException(item_not_found(Entities.User));
    return user;
  }

  async findOneByPhone(id: string, withDeleted?: boolean): Promise<User> {
    const user = await this.userRepository.findOneByPhone(id, withDeleted);
    return user;
  }

  async updateMe(dto: UpdateUserDto, user: User): Promise<User> {
    const updateUser = await this.userRepository.update(user, dto);
    return updateUser;
  }

  async deleteMe(user: User): Promise<void> {
    await this.userRepository.remove(user);
  }
  async getMyPhotos(user: User): Promise<UserPhoto[]> {
    return this.userRepository.getMyPhotos(user.id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const updateUser = await this.userRepository.update(user, dto);
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

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return;
  }

  async validate(id: string): Promise<User> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      throw new UnauthorizedException('The user is not here');
    }
    return user;
  }
}