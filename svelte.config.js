import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: 'https://github.com/NicolasArtemio/labarber',
  plugins: [svelte()],
});