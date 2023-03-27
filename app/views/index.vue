<template>
  <NuxtLayout name="header">
    <LazyHeader></LazyHeader>
  </NuxtLayout>
  <NuxtLayout name="content">
    <p>姓名：{{ name }}</p>
    <p>字体: {{ theme.font }}</p>
    <Welcome></Welcome>
    <ClientOnly>
      <p>{{ payload.hydration.data }}</p>
    </ClientOnly>
    <p :style="{ color: theme.color }">颜色:{{ theme.color }}</p>
    <p>
      <span v-for="item in theme.position">{{ item }}</span>
    </p>
    <button @click="useOther">改变颜色</button>
  </NuxtLayout>
  <NuxtLayout name="footer">
    <Footer></Footer>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Footer } from '#components'
import { useOther } from '@store/useOther';
import { useTheme } from '@store/useTheme';
import { useInfo } from '@store/useInfo';
const theme = computed(() => useTheme().value)
const name = useName()
// 初始化 useInfo
useInfo()
// useInfo初始化之后 可以使用key获取 也可以使用组合函数获取
const info= useState('info')
// const info= useInfo()

const { payload } = useNuxtApp()

</script>
