// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api1': {
        target: 'https://api.jsonserve.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, '')
      },
      '/api2': {
        target: 'https://www.jsonkeeper.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, '')
      }
    }
  }
})