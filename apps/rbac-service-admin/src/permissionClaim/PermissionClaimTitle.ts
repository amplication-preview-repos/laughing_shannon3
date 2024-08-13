import { PermissionClaim as TPermissionClaim } from "../api/permissionClaim/PermissionClaim";

export const PERMISSIONCLAIM_TITLE_FIELD = "action";

export const PermissionClaimTitle = (record: TPermissionClaim): string => {
  return record.action?.toString() || String(record.id);
};
