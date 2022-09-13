import type { Config } from "jest";
console.log("hi from jest config");
const config: Config = {
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test/imageProcessor/testBuffers.ts",
  ],
  collectCoverageFrom: ["src/**/*.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  cache: false,
};

export default config;
