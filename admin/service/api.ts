/* eslint-disable @typescript-eslint/ban-ts-comment *///@ts-nocheck
/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */
import type {
  ApiResponse,
  DeleteOrderPathParameters,
  DeletePetPathParameters,
  DeleteUserPathParameters,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  GetOrderByIdPathParameters,
  GetPetByIdPathParameters,
  GetUserByNamePathParameters,
  LoginUserParams,
  Order,
  Pet,
  PetBody,
  UpdatePetWithFormBody,
  UpdatePetWithFormPathParameters,
  UpdateUserPathParameters,
  UploadFileBody,
  UploadFilePathParameters,
  User,
  UserArrayBody,
} from "./api.schemas";
import { fetchInstance } from "../lib/fetch";

/**
 * @summary uploads an image
 */
export const uploadFile = (
  { petId }: UploadFilePathParameters,
  uploadFileBody: UploadFileBody,
) => {
  const formData = new FormData();
  if (uploadFileBody.additionalMetadata !== undefined) {
    formData.append("additionalMetadata", uploadFileBody.additionalMetadata);
  }
  if (uploadFileBody.file !== undefined) {
    formData.append("file", uploadFileBody.file);
  }

  return fetchInstance<ApiResponse>({
    url: `/pet/${petId}/uploadImage`,
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  });
};

/**
 * @summary Add a new pet to the store
 */
export const addPet = (petBody: PetBody) => {
  return fetchInstance<unknown>({
    url: `/pet`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: petBody,
  });
};

/**
 * @summary Update an existing pet
 */
export const updatePet = (petBody: PetBody) => {
  return fetchInstance<unknown>({
    url: `/pet`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: petBody,
  });
};

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (params: FindPetsByStatusParams) => {
  return fetchInstance<Pet[]>({
    url: `/pet/findByStatus`,
    method: "GET",
    params,
  });
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @deprecated
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (params: FindPetsByTagsParams) => {
  return fetchInstance<Pet[]>({
    url: `/pet/findByTags`,
    method: "GET",
    params,
  });
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = ({ petId }: GetPetByIdPathParameters) => {
  return fetchInstance<Pet>({ url: `/pet/${petId}`, method: "GET" });
};

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  { petId }: UpdatePetWithFormPathParameters,
  updatePetWithFormBody: UpdatePetWithFormBody,
) => {
  const formUrlEncoded = new URLSearchParams();
  if (updatePetWithFormBody.name !== undefined) {
    formUrlEncoded.append("name", updatePetWithFormBody.name);
  }
  if (updatePetWithFormBody.status !== undefined) {
    formUrlEncoded.append("status", updatePetWithFormBody.status);
  }

  return fetchInstance<unknown>({
    url: `/pet/${petId}`,
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: formUrlEncoded,
  });
};

/**
 * @summary Deletes a pet
 */
export const deletePet = ({ petId }: DeletePetPathParameters) => {
  return fetchInstance<unknown>({ url: `/pet/${petId}`, method: "DELETE" });
};

/**
 * @summary Place an order for a pet
 */
export const placeOrder = (order: Order) => {
  return fetchInstance<Order>({
    url: `/store/order`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: order,
  });
};

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 */
export const getOrderById = ({ orderId }: GetOrderByIdPathParameters) => {
  return fetchInstance<Order>({
    url: `/store/order/${orderId}`,
    method: "GET",
  });
};

/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = ({ orderId }: DeleteOrderPathParameters) => {
  return fetchInstance<unknown>({
    url: `/store/order/${orderId}`,
    method: "DELETE",
  });
};

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = () => {
  return fetchInstance<GetInventory200>({
    url: `/store/inventory`,
    method: "GET",
  });
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithArrayInput = (userArrayBody: UserArrayBody) => {
  return fetchInstance<void>({
    url: `/user/createWithArray`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: userArrayBody,
  });
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (userArrayBody: UserArrayBody) => {
  return fetchInstance<void>({
    url: `/user/createWithList`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: userArrayBody,
  });
};

/**
 * @summary Get user by user name
 */
export const getUserByName = ({ username }: GetUserByNamePathParameters) => {
  return fetchInstance<User>({ url: `/user/${username}`, method: "GET" });
};

/**
 * This can only be done by the logged in user.
 * @summary Updated user
 */
export const updateUser = (
  { username }: UpdateUserPathParameters,
  user: User,
) => {
  return fetchInstance<unknown>({
    url: `/user/${username}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: user,
  });
};

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = ({ username }: DeleteUserPathParameters) => {
  return fetchInstance<unknown>({ url: `/user/${username}`, method: "DELETE" });
};

/**
 * @summary Logs user into the system
 */
export const loginUser = (params: LoginUserParams) => {
  return fetchInstance<string>({ url: `/user/login`, method: "GET", params });
};

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = () => {
  return fetchInstance<void>({ url: `/user/logout`, method: "GET" });
};

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (user: User) => {
  return fetchInstance<void>({
    url: `/user`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: user,
  });
};

export type UploadFileResult = NonNullable<
  Awaited<ReturnType<typeof uploadFile>>
>;
export type AddPetResult = NonNullable<Awaited<ReturnType<typeof addPet>>>;
export type UpdatePetResult = NonNullable<
  Awaited<ReturnType<typeof updatePet>>
>;
export type FindPetsByStatusResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByStatus>>
>;
export type FindPetsByTagsResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByTags>>
>;
export type GetPetByIdResult = NonNullable<
  Awaited<ReturnType<typeof getPetById>>
>;
export type UpdatePetWithFormResult = NonNullable<
  Awaited<ReturnType<typeof updatePetWithForm>>
>;
export type DeletePetResult = NonNullable<
  Awaited<ReturnType<typeof deletePet>>
>;
export type PlaceOrderResult = NonNullable<
  Awaited<ReturnType<typeof placeOrder>>
>;
export type GetOrderByIdResult = NonNullable<
  Awaited<ReturnType<typeof getOrderById>>
>;
export type DeleteOrderResult = NonNullable<
  Awaited<ReturnType<typeof deleteOrder>>
>;
export type GetInventoryResult = NonNullable<
  Awaited<ReturnType<typeof getInventory>>
>;
export type CreateUsersWithArrayInputResult = NonNullable<
  Awaited<ReturnType<typeof createUsersWithArrayInput>>
>;
export type CreateUsersWithListInputResult = NonNullable<
  Awaited<ReturnType<typeof createUsersWithListInput>>
>;
export type GetUserByNameResult = NonNullable<
  Awaited<ReturnType<typeof getUserByName>>
>;
export type UpdateUserResult = NonNullable<
  Awaited<ReturnType<typeof updateUser>>
>;
export type DeleteUserResult = NonNullable<
  Awaited<ReturnType<typeof deleteUser>>
>;
export type LoginUserResult = NonNullable<
  Awaited<ReturnType<typeof loginUser>>
>;
export type LogoutUserResult = NonNullable<
  Awaited<ReturnType<typeof logoutUser>>
>;
export type CreateUserResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>;
