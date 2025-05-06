import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-json',
      closeBundle() {
        // Copia o arquivo `static.json` para `dist/` após o build
        copyFileSync(resolve(__dirname, 'static.json'), resolve(__dirname, 'dist/static.json'))
      }
    }
  ]
})