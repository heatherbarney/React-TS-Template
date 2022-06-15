import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

module.exports = {
  config,
  testEnvironment: "jsdom",
};
