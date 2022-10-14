import * as dotenv from "dotenv";

export const loadNextEnv = () => {
  const projectDir = process.cwd();

  dotenv.config({ path: projectDir + "/../../apps/portfolio/.env.test" });
};
