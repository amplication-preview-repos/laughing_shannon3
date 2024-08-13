import { PermissionClaimWhereInput } from "./PermissionClaimWhereInput";
import { PermissionClaimOrderByInput } from "./PermissionClaimOrderByInput";

export type PermissionClaimFindManyArgs = {
  where?: PermissionClaimWhereInput;
  orderBy?: Array<PermissionClaimOrderByInput>;
  skip?: number;
  take?: number;
};
