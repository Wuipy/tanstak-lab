import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: el workflow define VITE_BASE_PATH=/<nombre-repo>/
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    port: 5173,
  },
})
