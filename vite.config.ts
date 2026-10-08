import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    /* Alamat relatif /api diteruskan ke layanan notifikasi saat pratinjau. */
    proxy: {
      "/api": { target: "http://127.0.0.1:41001", changeOrigin: false },
    },
  },
});
