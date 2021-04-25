/* globals process */
import esbuild from "esbuild";
import { baseConfig } from "./config.mjs";

let config = {
  ...baseConfig,
  watch: true,
};

esbuild.build(config).catch(() => process.exit(1));
