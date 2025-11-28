import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor (librerías) del código de la app
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['motion'],
          'vendor-ui': ['react-icons', 'react-hot-toast', 'qrcode.react'],
        },
      },
    },
    // Aumentar el límite de advertencia si es necesario
    chunkSizeWarningLimit: 600,
  },
})
