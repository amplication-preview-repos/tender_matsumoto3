import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FileUploadResolverBase } from "./base/fileUpload.resolver.base";
import { FileUpload } from "./base/FileUpload";
import { FileUploadService } from "./fileUpload.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FileUpload)
export class FileUploadResolver extends FileUploadResolverBase {
  constructor(
    protected readonly service: FileUploadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
