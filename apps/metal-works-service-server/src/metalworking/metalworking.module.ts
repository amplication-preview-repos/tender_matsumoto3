import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MetalworkingModuleBase } from "./base/metalworking.module.base";
import { MetalworkingService } from "./metalworking.service";
import { MetalworkingController } from "./metalworking.controller";
import { MetalworkingResolver } from "./metalworking.resolver";

@Module({
  imports: [MetalworkingModuleBase, forwardRef(() => AuthModule)],
  controllers: [MetalworkingController],
  providers: [MetalworkingService, MetalworkingResolver],
  exports: [MetalworkingService],
})
export class MetalworkingModule {}
