import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionClaimUpdateInput = {
  action?: string | null;
  object?: string | null;
  role?: RoleWhereUniqueInput | null;
};
