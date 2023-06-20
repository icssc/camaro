import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  bundle: true,
  sourcemap: true,
  dts: true,
  splitting: false,
})
