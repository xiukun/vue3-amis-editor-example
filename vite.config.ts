/*
 * @Description: vite.config.ts
 * @Autor: henry.xiukun
 * @Date: 2023-11-17 10:36:04
 * @LastEditors: henry.xiukun
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js'

// 路径查找
const pathResolve = (dir: string): string => {
    return resolve(__dirname, '.', dir)
}
// 设置别名
const alias: Record<string, string> = {
    '@': pathResolve('src'),
    '/@': pathResolve('src'),
}


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // vue(),
        veauryVitePlugins({
            type: 'vue',
        })
    ],
    resolve: {
        alias,
    },
    server: {
        host: true,
        open: true,
        port: 9001,
        proxy: {
          '/api': {
            target: 'https://mock.apifox.com/m1/3546534-0-default',
            changeOrigin: true,
            rewrite: path => path.replace(/\/api/, ''),
          },
        },
      },
})
