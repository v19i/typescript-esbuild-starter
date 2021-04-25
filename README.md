# TypeScript esbuild starter

This template comes with the bare minimum required to build and test a TypeScript Node app or website.

## Build
`npm run build` uses [esbuild](https://esbuild.github.io) to produce an ESModule production bundle.

## Dev
Same as build, but with watch enabled.

## Configuration
There are two configuration target, one for `node` and one for `browser`.

The default configuration is set to `node`. To change it open `scripts/build.mjs` and select `platform.browser`.

For further customisation, have a look at esbuild's [simple options](https://esbuild.github.io/api/#simple-options) page

## Test
By default, tests will run for all the files that follow the `*.spec.ts` naming convention.

You run them by calling `npm run test`.

To check test coverage, call `npm run coverage`.
