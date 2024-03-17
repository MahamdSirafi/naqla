/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * naqleh
 * naqleh API
 * OpenAPI spec version: 1.0
 */
import type {
  Admin,
  AdminsControllerFindOnePathParameters,
  AdminsControllerRemovePathParameters,
  AdminsControllerUpdatePathParameters,
  AuthAdminResponse,
  AuthDriverControllerConfirmParams,
  AuthDriverResponse,
  AuthEmployeeResponse,
  AuthUserControllerConfirmParams,
  AuthUserResponse,
  CitiesControllerFindOnePathParameters,
  CitiesControllerRemovePathParameters,
  CitiesControllerUpdatePathParameters,
  City,
  ConfirmDriverDto,
  ConfirmUserDto,
  CreateAdminDto,
  CreateCityDto,
  CreateEmployeeDto,
  CreateRoleDto,
  Driver,
  DriversControllerFindOnePathParameters,
  DriversControllerFindParams,
  DriversControllerRemovePathParameters,
  DriversControllerUpdatePathParameters,
  Employee,
  EmployeesControllerFindOnePathParameters,
  EmployeesControllerRemovePathParameters,
  EmployeesControllerUpdatePathParameters,
  LoginAdminDto,
  LoginDriverDto,
  LoginEmployeeDto,
  LoginUserDto,
  OmitTypeClass,
  PaginatedResponse,
  Permission,
  PermissionsControllerFindOnePathParameters,
  PhotosControllerUploadMultipleBody,
  PhotosControllerUploadSingleBody,
  Role,
  RolesControllerAddPermissionsPathParameters,
  RolesControllerDeletePermissionsPathParameters,
  RolesControllerFindOnePathParameters,
  RolesControllerUpdatePathParameters,
  SendConfirm,
  SignUpDriverDto,
  SignUpUserDto,
  UpdateAdminDto,
  UpdateCityDto,
  UpdateDriverDto,
  UpdateDriverPhoneDto,
  UpdateEmployeeDto,
  UpdateRoleDto,
  UpdateUserDto,
  UpdateUserPhoneDto,
  User,
  UsersControllerFindOnePathParameters,
  UsersControllerFindParams,
  UsersControllerRemovePathParameters,
  UsersControllerUpdatePathParameters,
} from "./api.schemas";
import { fetchInstance } from "../lib/fetch";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const authUserControllerSignup = (
  signUpUserDto: SignUpUserDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/user/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpUserDto,
    },
    options,
  );
};

/**
 * @summary Login
 */
export const authUserControllerLogin = (
  loginUserDto: LoginUserDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/user/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginUserDto,
    },
    options,
  );
};

/**
 * @summary Confirm
 */
export const authUserControllerConfirm = (
  confirmUserDto: ConfirmUserDto,
  params: AuthUserControllerConfirmParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<AuthUserResponse>(
    {
      url: `/api/v1/auth/user/confirm`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: confirmUserDto,
      params,
    },
    options,
  );
};

/**
 * @summary update phone number
 */
export const authUserControllerUpdateMyNumber = (
  updateUserPhoneDto: UpdateUserPhoneDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/user/updateMyNumber`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateUserPhoneDto,
    },
    options,
  );
};

export const usersControllerFind = (
  params?: UsersControllerFindParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<PaginatedResponse>(
    { url: `/api/v1/users`, method: "GET", params },
    options,
  );
};

export const usersControllerGetMyPhotos = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    { url: `/api/v1/users/myPhotos`, method: "GET" },
    options,
  );
};

export const usersControllerGetMe = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    { url: `/api/v1/users/me`, method: "GET" },
    options,
  );
};

export const usersControllerUpdateMe = (
  updateUserDto: UpdateUserDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    {
      url: `/api/v1/users/me`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateUserDto,
    },
    options,
  );
};

export const usersControllerDeleteMe = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/users/me`, method: "DELETE" },
    options,
  );
};

export const usersControllerFindOne = (
  { id }: UsersControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    { url: `/api/v1/users/${id}`, method: "GET" },
    options,
  );
};

export const usersControllerUpdate = (
  { id }: UsersControllerUpdatePathParameters,
  updateUserDto: UpdateUserDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    {
      url: `/api/v1/users/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateUserDto,
    },
    options,
  );
};

export const usersControllerRemove = (
  { id }: UsersControllerRemovePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/users/${id}`, method: "DELETE" },
    options,
  );
};

export const citiesControllerCreate = (
  createCityDto: CreateCityDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<City>(
    {
      url: `/api/v1/cities`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createCityDto,
    },
    options,
  );
};

export const citiesControllerFind = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<City[]>(
    { url: `/api/v1/cities`, method: "GET" },
    options,
  );
};

export const citiesControllerFindOne = (
  { id }: CitiesControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<City>(
    { url: `/api/v1/cities/${id}`, method: "GET" },
    options,
  );
};

export const citiesControllerUpdate = (
  { id }: CitiesControllerUpdatePathParameters,
  updateCityDto: UpdateCityDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<City>(
    {
      url: `/api/v1/cities/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateCityDto,
    },
    options,
  );
};

export const citiesControllerRemove = (
  { id }: CitiesControllerRemovePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/cities/${id}`, method: "DELETE" },
    options,
  );
};

/**
 * @summary Login
 */
export const employeesControllerLogin = (
  loginEmployeeDto: LoginEmployeeDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<AuthEmployeeResponse>(
    {
      url: `/api/v1/employees/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginEmployeeDto,
    },
    options,
  );
};

export const employeesControllerFind = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Employee>(
    { url: `/api/v1/employees`, method: "GET" },
    options,
  );
};

export const employeesControllerCreate = (
  createEmployeeDto: CreateEmployeeDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Employee>(
    {
      url: `/api/v1/employees`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createEmployeeDto,
    },
    options,
  );
};

export const employeesControllerFindOne = (
  { id }: EmployeesControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Employee>(
    { url: `/api/v1/employees/${id}`, method: "GET" },
    options,
  );
};

export const employeesControllerUpdate = (
  { id }: EmployeesControllerUpdatePathParameters,
  updateEmployeeDto: UpdateEmployeeDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Employee>(
    {
      url: `/api/v1/employees/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateEmployeeDto,
    },
    options,
  );
};

export const employeesControllerRemove = (
  { id }: EmployeesControllerRemovePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/employees/${id}`, method: "DELETE" },
    options,
  );
};

/**
 * @summary Login
 */
export const adminsControllerLogin = (
  loginAdminDto: LoginAdminDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<AuthAdminResponse>(
    {
      url: `/api/v1/admins/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginAdminDto,
    },
    options,
  );
};

export const adminsControllerCreate = (
  createAdminDto: CreateAdminDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Admin>(
    {
      url: `/api/v1/admins`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createAdminDto,
    },
    options,
  );
};

export const adminsControllerFind = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Admin>(
    { url: `/api/v1/admins`, method: "GET" },
    options,
  );
};

export const adminsControllerFindOne = (
  { id }: AdminsControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Admin>(
    { url: `/api/v1/admins/${id}`, method: "GET" },
    options,
  );
};

export const adminsControllerUpdate = (
  { id }: AdminsControllerUpdatePathParameters,
  updateAdminDto: UpdateAdminDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Admin>(
    {
      url: `/api/v1/admins/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateAdminDto,
    },
    options,
  );
};

export const adminsControllerRemove = (
  { id }: AdminsControllerRemovePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/admins/${id}`, method: "DELETE" },
    options,
  );
};

export const rolesControllerFind = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<OmitTypeClass[]>(
    { url: `/api/v1/roles`, method: "GET" },
    options,
  );
};

export const rolesControllerCreate = (
  createRoleDto: CreateRoleDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Role>(
    {
      url: `/api/v1/roles`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createRoleDto,
    },
    options,
  );
};

export const rolesControllerFindOne = (
  { id }: RolesControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Role>(
    { url: `/api/v1/roles/${id}`, method: "GET" },
    options,
  );
};

export const rolesControllerUpdate = (
  { id }: RolesControllerUpdatePathParameters,
  updateRoleDto: UpdateRoleDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Role>(
    {
      url: `/api/v1/roles/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateRoleDto,
    },
    options,
  );
};

/**
 * @summary add permissions to the role
 */
export const rolesControllerAddPermissions = (
  { id }: RolesControllerAddPermissionsPathParameters,
  updateRoleDto: UpdateRoleDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Role>(
    {
      url: `/api/v1/roles/${id}/permissions`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: updateRoleDto,
    },
    options,
  );
};

/**
 * @summary remove permissions from the role
 */
export const rolesControllerDeletePermissions = (
  { id }: RolesControllerDeletePermissionsPathParameters,
  updateRoleDto: UpdateRoleDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Role>(
    {
      url: `/api/v1/roles/${id}/permissions`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: updateRoleDto,
    },
    options,
  );
};

export const permissionsControllerFind = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<OmitTypeClass[]>(
    { url: `/api/v1/permissions`, method: "GET" },
    options,
  );
};

export const permissionsControllerFindOne = (
  { id }: PermissionsControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Permission>(
    { url: `/api/v1/permissions/${id}`, method: "GET" },
    options,
  );
};

export const authDriverControllerSignup = (
  signUpDriverDto: SignUpDriverDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/driver/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpDriverDto,
    },
    options,
  );
};

/**
 * @summary Login
 */
export const authDriverControllerLogin = (
  loginDriverDto: LoginDriverDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/driver/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginDriverDto,
    },
    options,
  );
};

/**
 * @summary Confirm
 */
export const authDriverControllerConfirm = (
  confirmDriverDto: ConfirmDriverDto,
  params: AuthDriverControllerConfirmParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<AuthDriverResponse>(
    {
      url: `/api/v1/auth/driver/confirm`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: confirmDriverDto,
      params,
    },
    options,
  );
};

/**
 * @summary update phone number
 */
export const authDriverControllerUpdateMyNumber = (
  updateDriverPhoneDto: UpdateDriverPhoneDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<SendConfirm>(
    {
      url: `/api/v1/auth/driver/updateMyNumber`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateDriverPhoneDto,
    },
    options,
  );
};

export const driversControllerFind = (
  params?: DriversControllerFindParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<PaginatedResponse>(
    { url: `/api/v1/drivers`, method: "GET", params },
    options,
  );
};

export const driversControllerGetMyPhotos = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Driver>(
    { url: `/api/v1/drivers/myPhotos`, method: "GET" },
    options,
  );
};

export const driversControllerGetMe = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Driver>(
    { url: `/api/v1/drivers/me`, method: "GET" },
    options,
  );
};

export const driversControllerUpdateMe = (
  updateDriverDto: UpdateDriverDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Driver>(
    {
      url: `/api/v1/drivers/me`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateDriverDto,
    },
    options,
  );
};

export const driversControllerDeleteMe = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/drivers/me`, method: "DELETE" },
    options,
  );
};

export const driversControllerFindOne = (
  { id }: DriversControllerFindOnePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Driver>(
    { url: `/api/v1/drivers/${id}`, method: "GET" },
    options,
  );
};

export const driversControllerUpdate = (
  { id }: DriversControllerUpdatePathParameters,
  updateDriverDto: UpdateDriverDto,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Driver>(
    {
      url: `/api/v1/drivers/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateDriverDto,
    },
    options,
  );
};

export const driversControllerRemove = (
  { id }: DriversControllerRemovePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    { url: `/api/v1/drivers/${id}`, method: "DELETE" },
    options,
  );
};

/**
 * @summary Upload single photo
 */
export const photosControllerUploadSingle = (
  photosControllerUploadSingleBody: PhotosControllerUploadSingleBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  const formData = new FormData();
  formData.append("photo", photosControllerUploadSingleBody.photo);

  return fetchInstance<void>(
    {
      url: `/api/v1/photos/single`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    },
    options,
  );
};

/**
 * Upload up to 3 photos at a time.
 * @summary Upload multiple photos
 */
export const photosControllerUploadMultiple = (
  photosControllerUploadMultipleBody: PhotosControllerUploadMultipleBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  const formData = new FormData();
  photosControllerUploadMultipleBody.photos.forEach((value) =>
    formData.append("photos", value),
  );

  return fetchInstance<void>(
    {
      url: `/api/v1/photos/multiple`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    },
    options,
  );
};

export type AuthUserControllerSignupResult = NonNullable<
  Awaited<ReturnType<typeof authUserControllerSignup>>
>;
export type AuthUserControllerLoginResult = NonNullable<
  Awaited<ReturnType<typeof authUserControllerLogin>>
>;
export type AuthUserControllerConfirmResult = NonNullable<
  Awaited<ReturnType<typeof authUserControllerConfirm>>
>;
export type AuthUserControllerUpdateMyNumberResult = NonNullable<
  Awaited<ReturnType<typeof authUserControllerUpdateMyNumber>>
>;
export type UsersControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerFind>>
>;
export type UsersControllerGetMyPhotosResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerGetMyPhotos>>
>;
export type UsersControllerGetMeResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerGetMe>>
>;
export type UsersControllerUpdateMeResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdateMe>>
>;
export type UsersControllerDeleteMeResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerDeleteMe>>
>;
export type UsersControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerFindOne>>
>;
export type UsersControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdate>>
>;
export type UsersControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerRemove>>
>;
export type CitiesControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof citiesControllerCreate>>
>;
export type CitiesControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof citiesControllerFind>>
>;
export type CitiesControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof citiesControllerFindOne>>
>;
export type CitiesControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof citiesControllerUpdate>>
>;
export type CitiesControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof citiesControllerRemove>>
>;
export type EmployeesControllerLoginResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerLogin>>
>;
export type EmployeesControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerFind>>
>;
export type EmployeesControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerCreate>>
>;
export type EmployeesControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerFindOne>>
>;
export type EmployeesControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerUpdate>>
>;
export type EmployeesControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof employeesControllerRemove>>
>;
export type AdminsControllerLoginResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerLogin>>
>;
export type AdminsControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerCreate>>
>;
export type AdminsControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerFind>>
>;
export type AdminsControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerFindOne>>
>;
export type AdminsControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerUpdate>>
>;
export type AdminsControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof adminsControllerRemove>>
>;
export type RolesControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerFind>>
>;
export type RolesControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerCreate>>
>;
export type RolesControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerFindOne>>
>;
export type RolesControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerUpdate>>
>;
export type RolesControllerAddPermissionsResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerAddPermissions>>
>;
export type RolesControllerDeletePermissionsResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerDeletePermissions>>
>;
export type PermissionsControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof permissionsControllerFind>>
>;
export type PermissionsControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof permissionsControllerFindOne>>
>;
export type AuthDriverControllerSignupResult = NonNullable<
  Awaited<ReturnType<typeof authDriverControllerSignup>>
>;
export type AuthDriverControllerLoginResult = NonNullable<
  Awaited<ReturnType<typeof authDriverControllerLogin>>
>;
export type AuthDriverControllerConfirmResult = NonNullable<
  Awaited<ReturnType<typeof authDriverControllerConfirm>>
>;
export type AuthDriverControllerUpdateMyNumberResult = NonNullable<
  Awaited<ReturnType<typeof authDriverControllerUpdateMyNumber>>
>;
export type DriversControllerFindResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerFind>>
>;
export type DriversControllerGetMyPhotosResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerGetMyPhotos>>
>;
export type DriversControllerGetMeResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerGetMe>>
>;
export type DriversControllerUpdateMeResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerUpdateMe>>
>;
export type DriversControllerDeleteMeResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerDeleteMe>>
>;
export type DriversControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerFindOne>>
>;
export type DriversControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerUpdate>>
>;
export type DriversControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof driversControllerRemove>>
>;
export type PhotosControllerUploadSingleResult = NonNullable<
  Awaited<ReturnType<typeof photosControllerUploadSingle>>
>;
export type PhotosControllerUploadMultipleResult = NonNullable<
  Awaited<ReturnType<typeof photosControllerUploadMultiple>>
>;
