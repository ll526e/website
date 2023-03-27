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
      path: '~/components', // 指定目录
      // prefix: 'Special', // 指定组件的前缀
      // extensions: ['.vue'], // 限制自动导入的文件类型
      // pathPrefix: false, // 组件名称的命名规则：是=>目录+文件名 否=>文件名
    },
    '~/t5-components',
  ],
  imports: {
    dirs: [
      'composables',  // 仅仅扫描目录下的顶层文件
      'composables/*/index.{ts,js,mjs,mts}',  // 可配置层级及扫描文件名称和后缀
      'hooks/**', // 扫描所有文件
    ]
  }
})
