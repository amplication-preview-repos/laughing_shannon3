import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PermissionClaimModuleBase } from "./base/permissionClaim.module.base";
import { PermissionClaimService } from "./permissionClaim.service";
import { PermissionClaimController } from "./permissionClaim.controller";
import { PermissionClaimResolver } from "./permissionClaim.resolver";

@Module({
  imports: [PermissionClaimModuleBase, forwardRef(() => AuthModule)],
  controllers: [PermissionClaimController],
  providers: [PermissionClaimService, PermissionClaimResolver],
  exports: [PermissionClaimService],
})
export class PermissionClaimModule {}
