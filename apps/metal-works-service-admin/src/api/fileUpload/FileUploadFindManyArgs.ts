import { FileUploadWhereInput } from "./FileUploadWhereInput";
import { FileUploadOrderByInput } from "./FileUploadOrderByInput";

export type FileUploadFindManyArgs = {
  where?: FileUploadWhereInput;
  orderBy?: Array<FileUploadOrderByInput>;
  skip?: number;
  take?: number;
};
