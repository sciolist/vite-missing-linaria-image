import { defineConfig } from 'vite'
import linaria from '@linaria/rollup'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [linaria(),react()]
})
