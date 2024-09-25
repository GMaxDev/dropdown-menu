import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: './src/DropdownMenu.jsx', // Point d'entrée
      name: 'DropdownMenu', // Nom du component
      fileName: (format) => `dropdown-menu.${format}.js`, // Le nom de sortie pour chaque format
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclure React du bundle pour éviter les doublons
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
})
