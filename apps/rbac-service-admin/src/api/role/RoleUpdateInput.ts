import { PermissionClaimUpdateManyWithoutRolesInput } from "./PermissionClaimUpdateManyWithoutRolesInput";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  permissionClaims?: PermissionClaimUpdateManyWithoutRolesInput;
  users?: UserUpdateManyWithoutRolesInput;
};
