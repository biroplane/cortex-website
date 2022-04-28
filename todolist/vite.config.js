import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dynamicImport()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "tailwind.config.js": resolve(__dirname, "tailwind.config.js"),
    },
  },
  optimizeDeps: {
    include: ["tailwind.config.js"],
  },
});
