import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
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
