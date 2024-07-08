import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HeatTreatmentServiceBase } from "./base/heatTreatment.service.base";

@Injectable()
export class HeatTreatmentService extends HeatTreatmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
