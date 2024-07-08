import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MetalworkingResolverBase } from "./base/metalworking.resolver.base";
import { Metalworking } from "./base/Metalworking";
import { MetalworkingService } from "./metalworking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Metalworking)
export class MetalworkingResolver extends MetalworkingResolverBase {
  constructor(
    protected readonly service: MetalworkingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
