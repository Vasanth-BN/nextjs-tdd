import {
  getAllBrandService,
  getBrandByIdService,
} from "@/app/(main)/brand/service/brandService";
import {
  BASE_API_URL,
  GET_ALL_BRANDS_PATH,
  GET_BRAND_PATH,
} from "@/constants/endpoints";
import api from "@/lib/api";
import { faker } from "@faker-js/faker";

jest.mock("../../../../../src/lib/api", () => ({
  get: jest.fn(),
}));

describe("Brand service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call api.get service properly for the getAllBrandService", async () => {
    await getAllBrandService();
    expect(api.get).toHaveBeenCalledWith(
      `${BASE_API_URL}${GET_ALL_BRANDS_PATH}`,
    );
  });
  test("should call api.get service properly for the getBrandByIdService", async () => {
    const id = faker.number.int(5);
    await getBrandByIdService(id);
    expect(api.get).toHaveBeenCalledWith(`${BASE_API_URL}${GET_BRAND_PATH}`);
  });
});
