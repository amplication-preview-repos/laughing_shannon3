import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionClaimCreateInput = {
  action?: string | null;
  object?: string | null;
  role?: RoleWhereUniqueInput | null;
};
