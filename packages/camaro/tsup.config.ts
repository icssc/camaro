import { defineConfig } from 'tsup'
import { wasmLoader } from 'esbuild-plugin-wasm'

export default defineConfig({
  entry: {
    'index': 'src/js/index.ts',
  },
  dts: true,
  esbuildPlugins: [wasmLoader({ mode: 'embedded' })],
  format: ['esm'], // TODO: Makefile needs to build camaro for ESM and CJS.
  bundle: true,
  sourcemap: true,
  splitting: false,
  external: [],
  noExternal: [/.*/],
})
