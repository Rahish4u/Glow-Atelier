import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',   
  server: {
    proxy: {
      '/api': 'https://glow-atelier-server.onrender.com',
  },
},
  plugins: [react()],
})
