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
import { RoleService } from "../role.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RoleCreateInput } from "./RoleCreateInput";
import { Role } from "./Role";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";
import { RoleUpdateInput } from "./RoleUpdateInput";
import { PermissionClaimFindManyArgs } from "../../permissionClaim/base/PermissionClaimFindManyArgs";
import { PermissionClaim } from "../../permissionClaim/base/PermissionClaim";
import { PermissionClaimWhereUniqueInput } from "../../permissionClaim/base/PermissionClaimWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RoleControllerBase {
  constructor(
    protected readonly service: RoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Role })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRole(@common.Body() data: RoleCreateInput): Promise<Role> {
    return await this.service.createRole({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Role] })
  @ApiNestedQuery(RoleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async roles(@common.Req() request: Request): Promise<Role[]> {
    const args = plainToClass(RoleFindManyArgs, request.query);
    return this.service.roles({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async role(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    const result = await this.service.role({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRole(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() data: RoleUpdateInput
  ): Promise<Role | null> {
    try {
      return await this.service.updateRole({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRole(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    try {
      return await this.service.deleteRole({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/permissionClaims")
  @ApiNestedQuery(PermissionClaimFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PermissionClaim",
    action: "read",
    possession: "any",
  })
  async findPermissionClaims(
    @common.Req() request: Request,
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<PermissionClaim[]> {
    const query = plainToClass(PermissionClaimFindManyArgs, request.query);
    const results = await this.service.findPermissionClaims(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/permissionClaims")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async connectPermissionClaims(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionClaims: {
        connect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/permissionClaims")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async updatePermissionClaims(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionClaims: {
        set: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/permissionClaims")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async disconnectPermissionClaims(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionClaimWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissionClaims: {
        disconnect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        systemRole: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }
}