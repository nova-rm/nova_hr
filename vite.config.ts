import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages (repo de proyecto): VITE_BASE_PATH=/nombre-repo/ en CI.
// Local y dominio propio en raíz: no definir (usa "/").
const base = process.env.VITE_BASE_PATH?.replace(/\/?$/, "/") || "/";

export default defineConfig({
  plugins: [react()],
  base,
});
