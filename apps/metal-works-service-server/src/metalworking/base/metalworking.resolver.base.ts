/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Metalworking } from "./Metalworking";
import { MetalworkingCountArgs } from "./MetalworkingCountArgs";
import { MetalworkingFindManyArgs } from "./MetalworkingFindManyArgs";
import { MetalworkingFindUniqueArgs } from "./MetalworkingFindUniqueArgs";
import { DeleteMetalworkingArgs } from "./DeleteMetalworkingArgs";
import { MetalworkingService } from "../metalworking.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Metalworking)
export class MetalworkingResolverBase {
  constructor(
    protected readonly service: MetalworkingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Metalworking",
    action: "read",
    possession: "any",
  })
  async _metalworkingsMeta(
    @graphql.Args() args: MetalworkingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Metalworking])
  @nestAccessControl.UseRoles({
    resource: "Metalworking",
    action: "read",
    possession: "any",
  })
  async metalworkings(
    @graphql.Args() args: MetalworkingFindManyArgs
  ): Promise<Metalworking[]> {
    return this.service.metalworkings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Metalworking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Metalworking",
    action: "read",
    possession: "own",
  })
  async metalworking(
    @graphql.Args() args: MetalworkingFindUniqueArgs
  ): Promise<Metalworking | null> {
    const result = await this.service.metalworking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Metalworking)
  @nestAccessControl.UseRoles({
    resource: "Metalworking",
    action: "delete",
    possession: "any",
  })
  async deleteMetalworking(
    @graphql.Args() args: DeleteMetalworkingArgs
  ): Promise<Metalworking | null> {
    try {
      return await this.service.deleteMetalworking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}