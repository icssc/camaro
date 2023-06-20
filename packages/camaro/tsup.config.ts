import { defineConfig } from 'tsup'
import { wasmLoader } from 'esbuild-plugin-wasm'

/**
 * @see https://github.com/evanw/esbuild/issues/1921#issuecomment-1491470829
 */
const js = `\
import * as path from 'path';
import { fileURLToPath as fUtP } from 'url';
import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
const __filename = fUtP(import.meta.url);
const __dirname = path.dirname(__filename);
`;

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
  banner(ctx) {
    return ctx.format === 'esm' ? { js } : undefined
  },
})
