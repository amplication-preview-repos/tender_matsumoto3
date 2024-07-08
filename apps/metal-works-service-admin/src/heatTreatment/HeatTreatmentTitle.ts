import { HeatTreatment as THeatTreatment } from "../api/heatTreatment/HeatTreatment";

export const HEATTREATMENT_TITLE_FIELD = "id";

export const HeatTreatmentTitle = (record: THeatTreatment): string => {
  return record.id?.toString() || String(record.id);
};
