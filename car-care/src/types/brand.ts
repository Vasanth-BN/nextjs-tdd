import { ImageState } from "./common";
import { ModelState } from "./model";

export type BrandState = {
  id: number;
  brandName: string;
  brandLogo: ImageState;
  brandBg: ImageState;
  description: string;
  models: ModelState[];
};
