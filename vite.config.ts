import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 브라우저 자동 오픈 설정 port 3000번으로 바로 오픈
    port : 5173, // vite 번들러 기본 포트 5173번
    open: true,
    proxy: { // proxy 설정
      '/v1' : {
        target : "https://openapi.naver.com",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
