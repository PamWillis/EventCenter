import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), imagetools()],

  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          // Manual chunks for each image
          image1: ['./src/assets/home/main-ferriswheel.jpg'],
          image2: ['./src/assets/home/event-center.jpg'],
        },
      },
    },
    assetInlineLimit: 1000, // Set the limit to 1000 bytes
    chunkSizeWarningLimit: 1024 * 500,
  },
});