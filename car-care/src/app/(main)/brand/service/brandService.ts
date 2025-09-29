import {
  BASE_API_URL,
  GET_ALL_BRANDS_PATH,
  GET_BRAND_PATH,
} from "@/constants/endpoints";
import api from "@/lib/api";
import { BrandState } from "@/types/brand";

export async function getAllBrandService(): Promise<BrandState[]> {
  return await api.get(`${BASE_API_URL}${GET_ALL_BRANDS_PATH}`);
}
export async function getBrandByIdService(
  id: string | number,
): Promise<BrandState> {
  return await api.get(`${BASE_API_URL}${GET_BRAND_PATH}`);
}
