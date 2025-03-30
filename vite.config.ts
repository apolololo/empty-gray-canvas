
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // This ensures babel handles the JSX properly
      babel: {
        babelrc: true,
        configFile: true
      }
    })
  ],
  server: {
    port: 8080
  }
})
