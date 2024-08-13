import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionClaimService } from "./permissionClaim.service";
import { PermissionClaimControllerBase } from "./base/permissionClaim.controller.base";

@swagger.ApiTags("permissionClaims")
@common.Controller("permissionClaims")
export class PermissionClaimController extends PermissionClaimControllerBase {
  constructor(
    protected readonly service: PermissionClaimService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
