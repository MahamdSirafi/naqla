//@ts-nocheck
/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * naqleh
 * naqleh API
 * OpenAPI spec version: 1.0
 */
export type OrderControllerRemoveAdvantagesFromOrderPathParameters = {
  id: string;
  advantageId: string;
};
export type OrderControllerAddAdvantagesToOrderPathParameters = {
  id: string;
};
export type OrderControllerDeletePathParameters = {
  id: string;
};
export type OrderControllerUpdatePathParameters = {
  id: string;
};
export type OrderControllerFindOnePathParameters = {
  id: string;
};
export type PhotosControllerUploadMultipleBody = {
  photos: Blob[];
};

export type PhotosControllerUploadSingleBody = {
  photo: Blob;
};

export type AdvantagesControllerRemovePathParameters = {
  id: string;
};
export type AdvantagesControllerUpdatePathParameters = {
  id: string;
};
export type AdvantagesControllerFindOnePathParameters = {
  id: string;
};
export type CarControllerRemoveAdvantagesFromCarPathParameters = {
  id: string;
  advantageId: string;
};
export type CarControllerAddAdvantagesToCarPathParameters = {
  id: string;
};
export type CarControllerDeletePathParameters = {
  id: string;
};
export type CarControllerUpdatePathParameters = {
  id: string;
};
export type CarControllerFindOnePathParameters = {
  id: string;
};
export type DriversControllerRemovePathParameters = {
  id: string;
};
export type DriversControllerUpdatePathParameters = {
  id: string;
};
export type DriversControllerFindOnePathParameters = {
  id: string;
};
export type DriversControllerFindParams = {
  page?: number;
  limit?: number;
};

export type AuthDriverControllerConfirmParams = {
  /**
   * assign true to the field to confirm new number
   */
  phoneConfirm: boolean;
};

export type AdminsControllerRemovePathParameters = {
  id: string;
};
export type AdminsControllerUpdatePathParameters = {
  id: string;
};
export type AdminsControllerFindOnePathParameters = {
  id: string;
};
export type EmployeesControllerRemovePathParameters = {
  id: string;
};
export type EmployeesControllerUpdatePathParameters = {
  id: string;
};
export type EmployeesControllerFindOnePathParameters = {
  id: string;
};
export type CitiesControllerRemovePathParameters = {
  id: string;
};
export type CitiesControllerUpdatePathParameters = {
  id: string;
};
export type CitiesControllerFindOnePathParameters = {
  id: string;
};
export type PermissionsControllerFindOnePathParameters = {
  id: string;
};
export type RolesControllerDeletePermissionsPathParameters = {
  id: string;
};
export type RolesControllerAddPermissionsPathParameters = {
  id: string;
};
export type RolesControllerUpdatePathParameters = {
  id: string;
};
export type RolesControllerFindOnePathParameters = {
  id: string;
};
export type UsersControllerRemovePathParameters = {
  id: string;
};
export type UsersControllerUpdatePathParameters = {
  id: string;
};
export type UsersControllerFindOnePathParameters = {
  id: string;
};
export type UsersControllerFindParams = {
  page?: number;
  limit?: number;
};

export type AuthUserControllerConfirmParams = {
  /**
   * assign true to the field to confirm new number
   */
  phoneConfirm: boolean;
};

export type AddAdvansToOrderDto = {
  advantages: string[];
};

export type LocationDto = {
  latitude: number;
  longitude: number;
  region: string;
  street: string;
};

export type UpdateOrderDto = {
  cost: number;
  locationEnd: LocationDto;
  locationStart: LocationDto;
  photo: string[];
  receiving_date: Date;
  status: string;
};

export type CreateOrderDto = {
  locationEnd: LocationDto;
  locationStart: LocationDto;
  photo: string[];
  receiving_date: Date;
};

export type Location = {
  latitude: number;
  longitude: number;
  region: string;
  street: string;
};

export type Order = {
  advantages: string[];
  cost: number;
  createdAt: Date;
  id: string;
  locationEnd: Location;
  locationStart: Location;
  photos: string[];
  receiving_date: Date;
  status: string;
  updatedAt: Date;
};

export type UpdateAdvantageDto = {
  cost?: number;
  name?: string;
};

export type Advantage = {
  cost: number;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};

export type CreateAdvantageDto = {
  cost: number;
  name: string;
};

export type AddAdvansToCarDto = {
  advantages: string[];
};

export type UpdateCarDto = {
  brand: string;
  color: string;
  model: string;
  photo: string;
};

export type CreateCarDto = {
  brand: string;
  color: string;
  model: string;
  photo: string;
};

export type CarPhoto = {
  blurHash: string;
  createdAt: Date;
  id: string;
  mobileUrl: string;
  profileUrl: string;
  updatedAt: Date;
  webUrl: string;
};

export type Car = {
  advantages: string[];
  brand: string;
  color: string;
  createdAt: Date;
  id: string;
  model: string;
  photo: CarPhoto;
  updatedAt: Date;
};

export type UpdateDriverDto = {
  firstName: string;
  lastName: string;
  photo: string;
};

export type UpdateDriverPhoneDto = {
  phone: string;
};

export type DriverWallet = {
  available: Function;
  createdAt: Date;
  id: string;
  pending: number;
  total: number;
  updatedAt: Date;
};

export type Driver = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  photo: BasePhoto;
  updatedAt: Date;
  wallet: DriverWallet;
};

export type AuthDriverResponse = {
  driver: Driver;
  token: string;
};

export type ConfirmDriverDto = {
  otp: string;
  phone: string;
};

export type LoginDriverDto = {
  phone: string;
};

export type SignUpDriverDto = {
  firstName: string;
  lastName: string;
  phone: string;
};

export type UpdateAdminDto = {
  name?: string;
  password: string;
  phone: string;
  photo?: string;
};

export type CreateAdminDto = {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  photo?: string;
};

export type Admin = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  photo: BasePhoto;
  updatedAt: Date;
};

export type AuthAdminResponse = {
  admin: Admin;
  token: string;
};

export type LoginAdminDto = {
  password: string;
  phone: string;
};

export type UpdateEmployeeDto = {
  address: string;
  name?: string;
  password: string;
  phone: string;
  photo?: string;
};

export type CreateEmployeeDto = {
  address: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  photo?: string;
};

export type Employee = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  photo: BasePhoto;
  updatedAt: Date;
};

export type AuthEmployeeResponse = {
  employee: Employee;
  token: string;
};

export type LoginEmployeeDto = {
  password: string;
  phone: string;
};

export type UpdateCityDto = {
  name?: string;
};

export type City = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};

export type CreateCityDto = {
  name: string;
};

export type UpdateRoleDto = {
  permissionsIds: string[];
};

export type Permission = {
  action: string;
  createdAt: Date;
  id: string;
  subject: string;
  updatedAt: Date;
};

export type Role = {
  createdAt: Date;
  id: string;
  name: string;
  permissions: Permission[];
  updatedAt: Date;
};

export type CreateRoleDto = {
  /** the rule name */
  name: string;
  /** the Ids of permissions */
  permissionsIds: string[];
};

export type OmitTypeClass = {
  action: string;
  id: string;
  subject: string;
};

export type UpdateUserDto = {
  firstName: string;
  lastName: string;
  photo: string;
};

export type GlobalEntity = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
};

export type PaginatedResponse = {
  data: GlobalEntity;
  pageNumber: number;
  totalDataCount: number;
  totalPages: number;
};

export type UpdateUserPhoneDto = {
  phone: string;
};

export type BasePhoto = {
  blurHash: string;
  createdAt: Date;
  id: string;
  mobileUrl: string;
  profileUrl: string;
  updatedAt: Date;
  webUrl: string;
};

export type User = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  photo: BasePhoto;
  updatedAt: Date;
  wallet: UserWallet;
};

export type AuthUserResponse = {
  token: string;
  user: User;
};

export type Function = { [key: string]: any };

export type UserWallet = {
  available: Function;
  createdAt: Date;
  id: string;
  pending: number;
  total: number;
  updatedAt: Date;
};

export type ConfirmUserDto = {
  otp: string;
  phone: string;
};

export type LoginUserDto = {
  phone: string;
};

export type SendConfirm = {
  message: string;
};

export type SignUpUserDto = {
  firstName: string;
  lastName: string;
  phone: string;
};
