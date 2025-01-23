import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist", // Vercel에서 사용하는 출력 디렉토리
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
