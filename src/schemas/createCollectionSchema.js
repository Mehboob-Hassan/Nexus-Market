import * as Yup from "yup";
import { SUPPORTED_IMAGE_FORMATS } from "../config";

export const createCollectionSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter collection name"),
  categoryID: Yup.string().min(2).max(25).required("Please enter Category"),
  description: Yup.string()
    .min(2)
    .max(1000)
    .required("Please enter description"),
  externalUrl: Yup.string()
    .min(2)
    .max(100)
    .required("Please enter external link"),
  avatar: Yup.mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Uploaded file is too big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format.",
      (value) =>
        !value || (value && SUPPORTED_IMAGE_FORMATS.includes(value?.type))
    ),
  background: Yup.mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Uploaded file is too big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format.",
      (value) =>
        !value || (value && SUPPORTED_IMAGE_FORMATS.includes(value?.type))
    ),
});
