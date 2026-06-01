import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import the v4 engine

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Initialize Tailwind directly inside Vite
  ],
})
