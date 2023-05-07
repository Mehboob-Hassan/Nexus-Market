import * as Yup from "yup";
import { SUPPORTED_IMAGE_FORMATS } from "../config";

export const createNft = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter name"),
  price: Yup.string().required("Please enter price"),
  description: Yup.string().min(2).max(1000).required("Please enter bio"),
  externalLink: Yup.string().min(2).max(100).required("Please enter link"),
  image: Yup.mixed()
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
