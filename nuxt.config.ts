export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // 开启调试工具
  devtools: { enabled: true },
  modules:[ '@nuxtjs/tailwindcss','@element-plus/nuxt' ,'@pinia/nuxt',],
  css: ['element-plus/dist/index.css'],
  
})
