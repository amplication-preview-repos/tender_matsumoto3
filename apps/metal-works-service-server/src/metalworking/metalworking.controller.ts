import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetalworkingService } from "./metalworking.service";
import { MetalworkingControllerBase } from "./base/metalworking.controller.base";

@swagger.ApiTags("metalworkings")
@common.Controller("metalworkings")
export class MetalworkingController extends MetalworkingControllerBase {
  constructor(
    protected readonly service: MetalworkingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
