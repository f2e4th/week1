import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./week1/dist/',
  plugins: [vue()],
  assetsRoot: path.resolve(__dirname, './dist')
})
