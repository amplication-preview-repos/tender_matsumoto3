import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HeatTreatmentModuleBase } from "./base/heatTreatment.module.base";
import { HeatTreatmentService } from "./heatTreatment.service";
import { HeatTreatmentController } from "./heatTreatment.controller";
import { HeatTreatmentResolver } from "./heatTreatment.resolver";

@Module({
  imports: [HeatTreatmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [HeatTreatmentController],
  providers: [HeatTreatmentService, HeatTreatmentResolver],
  exports: [HeatTreatmentService],
})
export class HeatTreatmentModule {}
