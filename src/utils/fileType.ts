import type { FileLike, FileTypeTone } from "@/types/file";

const getFileExtension = (fileName: string) => {
  const normalizedName = fileName.toLowerCase();
  return normalizedName.includes(".")
    ? (normalizedName.split(".").pop() ?? "")
    : "";
};

export const getFileTypeLabel = (file: FileLike) => {
  const fileType = file.type.toLowerCase();
  const fileExtension = getFileExtension(file.name);

  if (fileType.includes("pdf") || fileExtension === "pdf") return "PDF";
  if (
    fileType.includes("image") ||
    ["png", "jpg", "jpeg", "gif", "webp"].includes(fileExtension)
  )
    return "Imagem";
  if (
    fileType.includes("spreadsheet") ||
    ["xlsx", "xls", "csv"].includes(fileExtension)
  )
    return fileExtension.toUpperCase() || "XLSX";
  if (fileType.includes("word") || ["doc", "docx"].includes(fileExtension))
    return fileExtension.toUpperCase() || "DOCX";

  return fileExtension ? fileExtension.toUpperCase() : "Arquivo";
};

export const getFileBadge = (file: FileLike) => {
  const fileType = file.type.toLowerCase();
  const fileExtension = getFileExtension(file.name);

  if (fileType.includes("pdf") || fileExtension === "pdf") return "PDF";
  if (
    fileType.includes("image") ||
    ["png", "jpg", "jpeg", "gif", "webp"].includes(fileExtension)
  )
    return "IMG";
  if (
    fileType.includes("spreadsheet") ||
    ["xlsx", "xls", "csv"].includes(fileExtension)
  )
    return fileExtension.toUpperCase() || "XLSX";
  if (fileType.includes("word") || ["doc", "docx"].includes(fileExtension))
    return fileExtension.toUpperCase() || "DOCX";

  return fileExtension ? fileExtension.toUpperCase() : "FILE";
};

export const getFileTone = (file: FileLike): FileTypeTone => {
  const fileType = file.type.toLowerCase();
  const fileExtension = getFileExtension(file.name);

  if (fileType.includes("pdf") || fileExtension === "pdf") return "tone-pdf";
  if (fileType.includes("word") || ["doc", "docx"].includes(fileExtension))
    return "tone-doc";
  if (
    fileType.includes("spreadsheet") ||
    ["xlsx", "xls", "csv"].includes(fileExtension)
  )
    return "tone-sheet";
  if (
    fileType.includes("image") ||
    ["png", "jpg", "jpeg", "gif", "webp"].includes(fileExtension)
  )
    return "tone-image";

  return "tone-other";
};
