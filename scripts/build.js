const config = require("./config");
const esbuild = require("esbuild");

esbuild
  .build(config)
  .catch(() => process.exit(1));
