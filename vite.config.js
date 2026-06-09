import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import the v4 engine

const rawTracker = process.env.VITE_TRACKER_URL || 'http://localhost:4000'
const trackerTarget = rawTracker.replace(/\/api.*$/, '')

// https://vite.dev
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: trackerTarget,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(), // Initialize Tailwind directly inside Vite
  ],
})
