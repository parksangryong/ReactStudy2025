import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const vitestConfig = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/routes/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/routes/layouts"),
    },
  },
  ...vitestConfig,
});
