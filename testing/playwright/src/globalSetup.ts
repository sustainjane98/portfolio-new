import { chromium, FullConfig } from "@playwright/test";
import { loadNextEnv } from "./helper/loadNextEnv.helper";

async function globalSetup(_: FullConfig) {
  loadNextEnv();
}

export default globalSetup;
