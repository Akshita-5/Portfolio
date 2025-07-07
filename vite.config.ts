import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  root: ".", // <-- root is now current directory
  build: {
    outDir: "dist", // output directory
    emptyOutDir: true,
  },
});
