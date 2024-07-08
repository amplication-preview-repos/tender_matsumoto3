import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileUploadServiceBase } from "./base/fileUpload.service.base";

@Injectable()
export class FileUploadService extends FileUploadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
