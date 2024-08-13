import { PermissionClaimCreateNestedManyWithoutRolesInput } from "./PermissionClaimCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  permissionClaims?: PermissionClaimCreateNestedManyWithoutRolesInput;
  users?: UserCreateNestedManyWithoutRolesInput;
};
