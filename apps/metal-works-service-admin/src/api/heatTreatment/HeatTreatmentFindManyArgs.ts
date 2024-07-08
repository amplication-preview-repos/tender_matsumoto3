import { HeatTreatmentWhereInput } from "./HeatTreatmentWhereInput";
import { HeatTreatmentOrderByInput } from "./HeatTreatmentOrderByInput";

export type HeatTreatmentFindManyArgs = {
  where?: HeatTreatmentWhereInput;
  orderBy?: Array<HeatTreatmentOrderByInput>;
  skip?: number;
  take?: number;
};
