/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */
export type LoginUserParams = {
  /**
   * The user name for login
   */
  username: string;
  /**
   * The password for login in clear text
   */
  password: string;
};

export type DeleteUserPathParameters = {
  username: string;
};
export type UpdateUserPathParameters = {
  username: string;
};
export type GetUserByNamePathParameters = {
  username: string;
};
export type GetInventory200 = { [key: string]: number };

export type DeleteOrderPathParameters = {
  orderId: number;
};
export type GetOrderByIdPathParameters = {
  orderId: number;
};
export type DeletePetPathParameters = {
  petId: number;
};
export type UpdatePetWithFormBody = {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
};

export type UpdatePetWithFormPathParameters = {
  petId: number;
};
export type GetPetByIdPathParameters = {
  petId: number;
};
export type FindPetsByTagsParams = {
  /**
   * Tags to filter by
   */
  tags: string[];
};

export type FindPetsByStatusStatusItem =
  (typeof FindPetsByStatusStatusItem)[keyof typeof FindPetsByStatusStatusItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FindPetsByStatusStatusItem = {
  available: "available",
  pending: "pending",
  sold: "sold",
} as const;

export type FindPetsByStatusParams = {
  /**
   * Status values that need to be considered for filter
   */
  status: FindPetsByStatusStatusItem[];
};

export type UploadFileBody = {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: Blob;
};

export type UploadFilePathParameters = {
  petId: number;
};
/**
 * Pet object that needs to be added to the store
 */
export type PetBody = Pet;

export type User = {
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  username?: string;
  /** User Status */
  userStatus?: number;
};

/**
 * List of user object
 */
export type UserArrayBody = User[];

/**
 * Order Status
 */
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrderStatus = {
  placed: "placed",
  approved: "approved",
  delivered: "delivered",
} as const;

export type Order = {
  complete?: boolean;
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /** Order Status */
  status?: OrderStatus;
};

export type Tag = {
  id?: number;
  name?: string;
};

/**
 * pet status in the store
 */
export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetStatus = {
  available: "available",
  pending: "pending",
  sold: "sold",
} as const;

export type Category = {
  id?: number;
  name?: string;
};

export type Pet = {
  category?: Category;
  id?: number;
  name: string;
  photoUrls: string[];
  /** pet status in the store */
  status?: PetStatus;
  tags?: Tag[];
};

export type ApiResponse = {
  code?: number;
  message?: string;
  type?: string;
};
