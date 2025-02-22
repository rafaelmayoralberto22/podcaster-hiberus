/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/podcaster/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/helpers/tests/setup.ts"],
    globals: true,
  },
  server: {
    port: 3000,
  },
});
