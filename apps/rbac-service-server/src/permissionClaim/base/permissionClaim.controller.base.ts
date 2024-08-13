/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PermissionClaimService } from "../permissionClaim.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PermissionClaimCreateInput } from "./PermissionClaimCreateInput";
import { PermissionClaim } from "./PermissionClaim";
import { PermissionClaimFindManyArgs } from "./PermissionClaimFindManyArgs";
import { PermissionClaimWhereUniqueInput } from "./PermissionClaimWhereUniqueInput";
import { PermissionClaimUpdateInput } from "./PermissionClaimUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PermissionClaimControllerBase {
  constructor(
    protected readonly service: PermissionClaimService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PermissionClaim })
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPermissionClaim(
    @common.Body() data: PermissionClaimCreateInput
  ): Promise<PermissionClaim> {
    return await this.service.createPermissionClaim({
      data: {
        ...data,

        role: data.role
          ? {
              connect: data.role,
            }
          : undefined,
      },
      select: {
        action: true,
        createdAt: true,
        id: true,
        object: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PermissionClaim] })
  @ApiNestedQuery(PermissionClaimFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async permissionClaims(
    @common.Req() request: Request
  ): Promise<PermissionClaim[]> {
    const args = plainToClass(PermissionClaimFindManyArgs, request.query);
    return this.service.permissionClaims({
      ...args,
      select: {
        action: true,
        createdAt: true,
        id: true,
        object: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PermissionClaim })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async permissionClaim(
    @common.Param() params: PermissionClaimWhereUniqueInput
  ): Promise<PermissionClaim | null> {
    const result = await this.service.permissionClaim({
      where: params,
      select: {
        action: true,
        createdAt: true,
        id: true,
        object: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PermissionClaim })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePermissionClaim(
    @common.Param() params: PermissionClaimWhereUniqueInput,
    @common.Body() data: PermissionClaimUpdateInput
  ): Promise<PermissionClaim | null> {
    try {
      return await this.service.updatePermissionClaim({
        where: params,
        data: {
          ...data,

          role: data.role
            ? {
                connect: data.role,
              }
            : undefined,
        },
        select: {
          action: true,
          createdAt: true,
          id: true,
          object: true,

          role: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PermissionClaim })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePermissionClaim(
    @common.Param() params: PermissionClaimWhereUniqueInput
  ): Promise<PermissionClaim | null> {
    try {
      return await this.service.deletePermissionClaim({
        where: params,
        select: {
          action: true,
          createdAt: true,
          id: true,
          object: true,

          role: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
