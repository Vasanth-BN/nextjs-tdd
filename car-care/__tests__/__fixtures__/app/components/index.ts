import { BrandState } from "@/types/brand";
import { faker } from "@faker-js/faker";

export function createRandomBrand(): BrandState {
  return {
    brandBg: {
      altText: faker.vehicle.vehicle(),
      src: faker.internet.url(),
    },
    brandLogo: {
      altText: faker.vehicle.vehicle(),
      src: faker.internet.url(),
    },
    brandName: faker.vehicle.vehicle(),
    description: faker.lorem.sentence(),
    id: faker.number.int(10),
    models: [
      {
        brandId: faker.number.int(10).toString(),
        description: faker.lorem.sentence(),
        modelId: faker.number.int(10),
        modelName: faker.vehicle.vehicle(),
        frontImage: {
          altText: faker.vehicle.vehicle(),
          src: faker.internet.url(),
        },
        rearImage: {
          altText: faker.vehicle.vehicle(),
          src: faker.internet.url(),
        },
        segment: faker.lorem.word(5),
        engine: faker.lorem.word(10),
        engineType: faker.lorem.word(15),
        fuelType: faker.lorem.word(5),
        horsePower: faker.lorem.word(5),
        torque: faker.lorem.word(5),
        transmission: faker.lorem.word(5),
        length: faker.lorem.word(5),
        width: faker.lorem.word(5),
        height: faker.lorem.word(5),
        price: faker.lorem.word(5),
      },
    ],
  };
}

export const mockBrands = (count: number): BrandState[] => {
  return faker.helpers.multiple(createRandomBrand, {
    count,
  });
};
