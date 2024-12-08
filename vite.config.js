import { defineConfig } from 'vite';

export default defineConfig({
  base: '/WEBSHOP%20HEADPHONES/', // Här anger du din app's base path (med %20 för mellanslag)
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        products: './products.html',
      },
    },
  },
});
