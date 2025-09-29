import { faker } from "@faker-js/faker";
import { Session } from "next-auth";

export const ApiFakeData = {
  successResponse: {
    data: {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  },
  errorResponse: {
    message: "Invalid request",
  },
  session: {
    user: {
      accessToken: faker.string.alphanumeric({
        length: { min: 10, max: 20 },
      }),
      refreshToken: faker.string.alphanumeric({
        length: { min: 10, max: 20 },
      }),
      expiresIn: faker.number.int(),
    },
    graphToken: {
      access_token: faker.string.alphanumeric({
        length: { min: 10, max: 20 },
      }),
      expires_in: faker.number.int(),
      ext_expires_in: faker.number.int(),
      token_type: faker.lorem.word(),
    },
  } as unknown as Session,
};

export const mockCredentials = {
  invalidMail: faker.lorem.word(5),
  invalidPassword: faker.lorem.word(5),
};

export const mockSession = {
  data: null,
  status: "unauthenticated",
};
