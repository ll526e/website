<template>
    <div>footer-111
        <button @click="getTheme">获取颜色</button>
    </div>
</template>
<script setup lang="ts">
import { useTheme } from '../store/useTheme';
const getTheme = () => {
    const theme = useTheme()
    console.log(theme.value);
}
</script>