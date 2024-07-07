<template>
  <!-- 相当于routerLink -->
  <nuxt-link to="/">首页</nuxt-link>
  <nuxt-link to="/video">视频页</nuxt-link>
  <!-- Nuxt页面路由出口  相当于routerView -->
  <NuxtPage></NuxtPage>
</template>
<script setup lang="ts">
// SEO优化
useSeoMeta({
  title:"哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description:"bilibili是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐。",
  keywords:"B站,bilibili,哔哩哔哩,弹幕,字幕,动漫,动漫音乐,游戏,游戏解说,ACG,动画,番组,新番,初音,洛天依,虚拟歌手"
})
</script>