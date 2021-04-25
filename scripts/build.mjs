import esbuild from "esbuild";
import { baseConfig, platform } from "./config.mjs";

let config = {
  ...baseConfig,
};

if (config.platform === platform.browser) {
  config = {
    ...config,
    sourcemap: true,
    minify: true,
  };
}

esbuild.build(config).catch(() => process.exit(1));
