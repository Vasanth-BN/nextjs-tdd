import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testPathIgnorePatterns: [
    "__tests__/__utils__",
    "__tests__/__mocks__",
    "__tests__/__fixtures__",
  ],

  coveragePathIgnorePatterns: [
    "__tests__/__utils__",
    "__tests__/__mocks__",
    "__tests__/__fixtures__",
    "src/app/api/auth",
  ],

  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
export default createJestConfig(config);
