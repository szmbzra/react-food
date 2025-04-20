import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  devSourcemap: true,
  css: {
    devSourcemap: true, // Enable for all CSS files
    preprocessorOptions: {
      scss: {
        // Enable for SCSS files being processed
        sourceMap: true,  // For SCSS
      },
    },
  },

})
