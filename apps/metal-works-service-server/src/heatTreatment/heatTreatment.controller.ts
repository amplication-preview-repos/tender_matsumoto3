import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HeatTreatmentService } from "./heatTreatment.service";
import { HeatTreatmentControllerBase } from "./base/heatTreatment.controller.base";

@swagger.ApiTags("heatTreatments")
@common.Controller("heatTreatments")
export class HeatTreatmentController extends HeatTreatmentControllerBase {
  constructor(
    protected readonly service: HeatTreatmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
