<template>
  <NuxtLayout name="header">
    <LazyHeader></LazyHeader>
  </NuxtLayout>
  <NuxtLayout name="content">
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <p>字体: {{ theme.font }}</p>
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
const theme = computed(() => useTheme().value)
const name = useName()
const age = useAge()
const sex = useSex()

</script>
