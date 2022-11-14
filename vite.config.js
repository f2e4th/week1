import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/week1/',
  plugins: [vue()],
  resolve: {
    alias: {
         '/images': 'src/assets/images',
    },
},
})
