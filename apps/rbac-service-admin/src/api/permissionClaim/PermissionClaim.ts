import { Role } from "../role/Role";

export type PermissionClaim = {
  action: string | null;
  createdAt: Date;
  id: string;
  object: string | null;
  role?: Role | null;
  updatedAt: Date;
};
