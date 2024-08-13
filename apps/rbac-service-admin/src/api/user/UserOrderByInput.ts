import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roleId?: SortOrder;
  roles?: SortOrder;
  systemRole?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
