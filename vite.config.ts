import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces // Use PORT from environment variable or fallback to 3000
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from dependency pre-bundling
  },
});
