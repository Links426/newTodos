import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

import { presetUno, presetAttributify } from 'unocss'
import path from 'path'
const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    base: './', //打包路径
    plugins: [
        vue(),
        Unocss({
            presets: [presetUno(), presetAttributify()],
            shortcuts: [
                ['flex-center', 'flex items-center justify-center'],
                ['rounded', 'rounded-50%'],
            ],
        }),
        Components({
            resolvers: [
                ArcoResolver({
                    sideEffect: true,
                }),
            ],
            deep: true,
            dirs: ['src/components'],
            // ui库解析器
            // resolvers: [ElementPlusResolver()],
            extensions: ['vue'],
            // 配置文件生成位置
            dts: 'src/components.d.ts',
        }),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: ['vue', 'vue-router', 'pinia'],
            resolvers: [ArcoResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
        }, // 导入时想要省略的扩展名列表
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
})
