import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    svelte(),
    compression({
      algorithm: 'brotliCompress', // o 'gzip'
      ext: '.br', // o '.gz'
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separá gsap en su propio chunk para no bloquear el hilo principal
          gsap: ['gsap'],
        },
      },
    },
  },
});
