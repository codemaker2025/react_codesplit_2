import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const sslPath = path.resolve(__dirname, 'openssl'); // Absolute path for the openssl directory

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join(sslPath, 'private_key.pem')),
      cert: fs.readFileSync(path.join(sslPath, 'public_key.pem')),
    },
    proxy: {
      '/graphql': {
        target: 'https://dtale.webc.in',
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    },
    cors: true
  },
  optimizeDeps: {
    include: ['@react-oauth/google']
  }
});
