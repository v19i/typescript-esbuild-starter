export const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  format: "esm",
};

export const platform = {
  browser: "browser",
  node: "node",
};
