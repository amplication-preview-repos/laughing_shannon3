import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PermissionClaimResolverBase } from "./base/permissionClaim.resolver.base";
import { PermissionClaim } from "./base/PermissionClaim";
import { PermissionClaimService } from "./permissionClaim.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PermissionClaim)
export class PermissionClaimResolver extends PermissionClaimResolverBase {
  constructor(
    protected readonly service: PermissionClaimService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
