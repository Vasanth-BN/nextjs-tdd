import { BrandState } from "./brand";

export type ModelState = {
  modelId: number;
  brand: BrandState;
  modelName: string;
  description: string;
  engine: string;
  weight: string;
  length: string;
  width: string;
  price: string;
};
