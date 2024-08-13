import { PermissionClaim } from "../permissionClaim/PermissionClaim";
import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  permissionClaims?: Array<PermissionClaim>;
  updatedAt: Date;
  users?: Array<User>;
};
