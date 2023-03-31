<template>
  <NuxtLayout name="header">
    <LazyHeader></LazyHeader>
  </NuxtLayout>
  <NuxtLayout name="content">
    <p>姓名：{{ name }}</p>
    <p>字體: {{ theme.font }}</p>
    <Welcome></Welcome>
    <ClientOnly>
      <p>{{ payload.hydration.data }}</p>
    </ClientOnly>
    <p :style="{ color: theme.color }">顏色:{{ theme.color }}</p>
    <p>
      <span v-for="item in theme.position">{{ item }}</span>
    </p>
    <button @click="useOther">改變顏色</button>
    <SkeletonWrap :loading="loading"></SkeletonWrap>
    <button @click="changeLoading">改變狀態</button>
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
const loading = ref(true)
// 初始化 useInfo
useInfo()
// useInfo初始化之後 可以使用key獲取 也可以使用組合函數獲取
const info = useState('info')
// const info= useInfo()

const { payload } = useNuxtApp()

const changeLoading = () => {
  // setTimeout(() => {
  loading.value = !loading.value
  // }, 3000);
}

</script>
