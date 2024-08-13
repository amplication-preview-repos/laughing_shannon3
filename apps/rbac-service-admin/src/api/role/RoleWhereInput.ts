import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionClaimListRelationFilter } from "../permissionClaim/PermissionClaimListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  permissionClaims?: PermissionClaimListRelationFilter;
  users?: UserListRelationFilter;
};
