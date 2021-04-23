const config = require("./config");
const esbuild = require("esbuild");

esbuild
  .build({
    ...config,
    watch: true,
  })
  .catch(() => process.exit(1));
