import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  base: "/FlyDream/", // Change back to repo name for GitHub Pages
  build: {
    assetsDir: "assets",
    copyPublicDir: true,
  },
});
