import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@store': resolve(__dirname, './app/store')
  },
  srcDir: 'app/',
  dir: {
    pages: 'views'
  },
  components: [
    {
      path: '~/components', // 指定目錄
      // prefix: 'Special', // 指定組件的前綴
      extensions: ['.vue'], // 限制自動導入的文件類型
      // pathPrefix: false, // 組件名稱的命名規則：是=>目錄+文件名 否=>文件名
    },
    '~/t5-components',
  ],
  imports: {
    dirs: [
      'composables',  // 僅僅掃描目錄下的頂層文件
      'composables/*/index.{ts,js,mjs,mts}',  // 可配置層級及掃描文件名稱和後綴
      'hooks/**', // 掃描所有文件
    ]
  },
  experimental: {
    componentIslands: true
  }
})
