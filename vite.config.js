import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          babylon: ['babylonjs', 'babylonjs-loaders', 'babylonjs-gui']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@data': resolve(__dirname, './data'),
      '@components': resolve(__dirname, './components'),
      '@game': resolve(__dirname, './game')
    }
  },
  server: {
    port: 8080,
    open: true,
    cors: true
  },
  optimizeDeps: {
    include: ['babylonjs', 'babylonjs-loaders', 'babylonjs-gui']
  }
}) 