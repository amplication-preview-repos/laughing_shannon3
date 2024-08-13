import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionClaimWhereInput = {
  action?: StringNullableFilter;
  id?: StringFilter;
  object?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
