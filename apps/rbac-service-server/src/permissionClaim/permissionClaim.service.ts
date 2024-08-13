import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PermissionClaimServiceBase } from "./base/permissionClaim.service.base";

@Injectable()
export class PermissionClaimService extends PermissionClaimServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
