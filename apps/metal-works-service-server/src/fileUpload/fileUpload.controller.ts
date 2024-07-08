import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FileUploadService } from "./fileUpload.service";
import { FileUploadControllerBase } from "./base/fileUpload.controller.base";

@swagger.ApiTags("fileUploads")
@common.Controller("fileUploads")
export class FileUploadController extends FileUploadControllerBase {
  constructor(
    protected readonly service: FileUploadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
