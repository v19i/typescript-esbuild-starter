export const platform = {
  browser: "browser",
  node: "node",
};

export const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  format: "esm",
  platform: platform.node,
};
