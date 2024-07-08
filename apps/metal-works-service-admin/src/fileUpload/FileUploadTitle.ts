import { FileUpload as TFileUpload } from "../api/fileUpload/FileUpload";

export const FILEUPLOAD_TITLE_FIELD = "id";

export const FileUploadTitle = (record: TFileUpload): string => {
  return record.id?.toString() || String(record.id);
};
