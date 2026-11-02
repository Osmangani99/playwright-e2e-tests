import { test as base } from "@playwright/test";

export type EnvConfig = {
  envName: string;
  appURL: string;
  nopCommerceWeb: string;
  dbConfig: {};
  apiURL: string;
};

export const test = base.extend<EnvConfig>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  envName: ["qa", { option: true }],
  appURL: ["<provideURL>", { option: true }],
  apiURL: ["<provideURL>", { option: true }],
  dbConfig: [{}, { option: true }],
  nopCommerceWeb: ["<provideURL>", { option: true }],
});
