import { UpdateUserPhoneDto } from '../../../../auth-user';
import { PaginatedResponse } from '../../../../common/types';
import { Role } from '../../../roles';
import { CreateUserDto, UpdateUserDto } from '../../dtos';
import { UserPhoto } from '../../entities/user-photo.entity';
import { User } from '../../entities/user.entity';

export interface IUsersService {
  create(dto: CreateUserDto, role: Role): Promise<User>;

  confirm(nonConfirmedUser: User): Promise<User>;

  find(
    page: number,
    limit: number,
    withDeleted?: boolean,
  ): Promise<PaginatedResponse<User> | User[]>;

  findOne(id: string, withDeleted?: boolean): Promise<User>;

  updateMe(dto: UpdateUserDto, user: User): Promise<User>;

  updatePhone(user: User, dto: UpdateUserPhoneDto): Promise<User>;

  deleteMe(user: User): Promise<void>;

  getMyPhotos(user: User): Promise<UserPhoto[]>;

  update(id: string, dto: UpdateUserDto): Promise<User>;

  remove(id: string): Promise<void>;

  findOneByPhone(phone: string, withDeleted?: boolean): Promise<User>;

  validate(id: string): Promise<User>;

  // recover(id: string): Promise<User>;
}