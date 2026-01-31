import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfig from "./tsconfig.app.json";

const alias = Object.fromEntries(
  Object.entries(tsconfig.compilerOptions.paths).map(([key, [value]]) => [
    key.replace("/*", ""),
    path.resolve(__dirname, value.replace("/*", "")),
  ]),
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    alias,
    // setupFiles: ["./src/tests/setup.ts", "./src/tests/__mocks__/store.ts"],
    coverage: {
      provider: "v8",
      exclude: [
        "./src/vite-env.d.ts",
        "./eslint.config.js",
        "./vite.config.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]",
    },
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
