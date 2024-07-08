import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FileUploadModuleBase } from "./base/fileUpload.module.base";
import { FileUploadService } from "./fileUpload.service";
import { FileUploadController } from "./fileUpload.controller";
import { FileUploadResolver } from "./fileUpload.resolver";

@Module({
  imports: [FileUploadModuleBase, forwardRef(() => AuthModule)],
  controllers: [FileUploadController],
  providers: [FileUploadService, FileUploadResolver],
  exports: [FileUploadService],
})
export class FileUploadModule {}
