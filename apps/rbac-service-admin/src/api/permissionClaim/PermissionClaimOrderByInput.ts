import { SortOrder } from "../../util/SortOrder";

export type PermissionClaimOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  object?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
