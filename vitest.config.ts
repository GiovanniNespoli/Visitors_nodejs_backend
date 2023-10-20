import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: [
      {
        find: "@constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
      {
        find: "@shared",
        replacement: resolve(__dirname, "./src/shared"),
      },
      {
        find: "@modules",
        replacement: resolve(__dirname, "./src/modules"),
      },
    ],
  },
  base: "/",
});
