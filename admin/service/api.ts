/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */
import { fetchInstance } from "../lib/fetch";
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

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * @summary uploads an image
 */
export const uploadFile = (
  { petId }: UploadFilePathParameters,
  uploadFileBody: UploadFileBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  const formData = new FormData();
  if (uploadFileBody.additionalMetadata !== undefined) {
    formData.append("additionalMetadata", uploadFileBody.additionalMetadata);
  }
  if (uploadFileBody.file !== undefined) {
    formData.append("file", uploadFileBody.file);
  }

  return fetchInstance<ApiResponse>(
    {
      url: `/pet/${petId}/uploadImage`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    },
    options,
  );
};

/**
 * @summary Add a new pet to the store
 */
export const addPet = (
  petBody: PetBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    {
      url: `/pet`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: petBody,
    },
    options,
  );
};

/**
 * @summary Update an existing pet
 */
export const updatePet = (
  petBody: PetBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    {
      url: `/pet`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: petBody,
    },
    options,
  );
};

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (
  params: FindPetsByStatusParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Pet[]>(
    { url: `/pet/findByStatus`, method: "GET", params },
    options,
  );
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @deprecated
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (
  params: FindPetsByTagsParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Pet[]>(
    { url: `/pet/findByTags`, method: "GET", params },
    options,
  );
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (
  { petId }: GetPetByIdPathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Pet>({ url: `/pet/${petId}`, method: "GET" }, options);
};

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  { petId }: UpdatePetWithFormPathParameters,
  updatePetWithFormBody: UpdatePetWithFormBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  const formUrlEncoded = new URLSearchParams();
  if (updatePetWithFormBody.name !== undefined) {
    formUrlEncoded.append("name", updatePetWithFormBody.name);
  }
  if (updatePetWithFormBody.status !== undefined) {
    formUrlEncoded.append("status", updatePetWithFormBody.status);
  }

  return fetchInstance<unknown>(
    {
      url: `/pet/${petId}`,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: formUrlEncoded,
    },
    options,
  );
};

/**
 * @summary Deletes a pet
 */
export const deletePet = (
  { petId }: DeletePetPathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    { url: `/pet/${petId}`, method: "DELETE" },
    options,
  );
};

/**
 * @summary Place an order for a pet
 */
export const placeOrder = (
  order: Order,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Order>(
    {
      url: `/store/order`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: order,
    },
    options,
  );
};

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 */
export const getOrderById = (
  { orderId }: GetOrderByIdPathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<Order>(
    { url: `/store/order/${orderId}`, method: "GET" },
    options,
  );
};

/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (
  { orderId }: DeleteOrderPathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    { url: `/store/order/${orderId}`, method: "DELETE" },
    options,
  );
};

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = (
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<GetInventory200>(
    { url: `/store/inventory`, method: "GET" },
    options,
  );
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithArrayInput = (
  userArrayBody: UserArrayBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    {
      url: `/user/createWithArray`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userArrayBody,
    },
    options,
  );
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (
  userArrayBody: UserArrayBody,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    {
      url: `/user/createWithList`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userArrayBody,
    },
    options,
  );
};

/**
 * @summary Get user by user name
 */
export const getUserByName = (
  { username }: GetUserByNamePathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<User>(
    { url: `/user/${username}`, method: "GET" },
    options,
  );
};

/**
 * This can only be done by the logged in user.
 * @summary Updated user
 */
export const updateUser = (
  { username }: UpdateUserPathParameters,
  user: User,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    {
      url: `/user/${username}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: user,
    },
    options,
  );
};

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = (
  { username }: DeleteUserPathParameters,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<unknown>(
    { url: `/user/${username}`, method: "DELETE" },
    options,
  );
};

/**
 * @summary Logs user into the system
 */
export const loginUser = (
  params: LoginUserParams,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<string>(
    { url: `/user/login`, method: "GET", params },
    options,
  );
};

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = (options?: SecondParameter<typeof fetchInstance>) => {
  return fetchInstance<void>({ url: `/user/logout`, method: "GET" }, options);
};

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (
  user: User,
  options?: SecondParameter<typeof fetchInstance>,
) => {
  return fetchInstance<void>(
    {
      url: `/user`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: user,
    },
    options,
  );
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