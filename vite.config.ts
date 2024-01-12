import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

const config = defineConfig({
  plugins: [dts({ include: ["src/api"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/api/main.ts",
      ),
      formats: ["es", "cjs"],
    },
  },
  test: {
    globals: true,
  },
});

export default config;
