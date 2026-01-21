import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Importação oficial da v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Adicione o plugin do tailwind aqui!
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      clientPort: 443
    }
  }
})