import { BrandState } from "./brand";
import { ImageState } from "./common";

export type ModelState = {
  modelId: number;
  brandId: string;
  modelName: string;
  frontImage: ImageState;
  rearImage: ImageState;
  description: string;
  segment: string;
  engine: string;
  engineType: string;
  fuelType: string;
  horsePower: string;
  torque: string;
  transmission: string;
  length: string;
  width: string;
  height: string;
  price: string;
};
