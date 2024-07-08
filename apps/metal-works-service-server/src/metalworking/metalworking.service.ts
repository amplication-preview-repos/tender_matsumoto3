import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetalworkingServiceBase } from "./base/metalworking.service.base";

@Injectable()
export class MetalworkingService extends MetalworkingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
