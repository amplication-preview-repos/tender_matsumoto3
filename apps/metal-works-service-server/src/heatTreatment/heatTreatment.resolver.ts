import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HeatTreatmentResolverBase } from "./base/heatTreatment.resolver.base";
import { HeatTreatment } from "./base/HeatTreatment";
import { HeatTreatmentService } from "./heatTreatment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HeatTreatment)
export class HeatTreatmentResolver extends HeatTreatmentResolverBase {
  constructor(
    protected readonly service: HeatTreatmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
