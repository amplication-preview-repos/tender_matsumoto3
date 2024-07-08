import { Metalworking as TMetalworking } from "../api/metalworking/Metalworking";

export const METALWORKING_TITLE_FIELD = "id";

export const MetalworkingTitle = (record: TMetalworking): string => {
  return record.id?.toString() || String(record.id);
};
