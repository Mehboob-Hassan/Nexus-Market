import * as Yup from "yup";
import { SUPPORTED_IMAGE_FORMATS } from "../config";

export const updateCollectionSchema = Yup.object({
  name: Yup.string(),
  description: Yup.string(),
  externalUrl: Yup.string(),
  avatar: Yup.mixed(),
  background: Yup.mixed(),
});
