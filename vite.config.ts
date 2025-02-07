import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-website/', // This must match your repository name exactly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
