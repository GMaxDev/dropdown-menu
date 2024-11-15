import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/DropdownMenu.jsx",
      name: "DropdownMenu", 
      formats: ["es", "cjs"], // Formats de sortie (ESM et CommonJS)
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`, // Nom de sortie pour chaque format
    },
    rollupOptions: {
      external: ["react", "react-dom"], // On exclut React du bundle pour éviter les doublons
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
});
