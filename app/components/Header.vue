<template>
    <div>
        header-111
        <button @click="changeTheme">主题变更</button>
    </div>
</template>
<script setup lang="ts">
import { useTheme } from '../store/useTheme';
const changeTheme = () => {
    const theme = useTheme()
    let fontNum = Number(theme.value.font.split('px')[0])
    fontNum++
    theme.value.font = fontNum + 'px'
    theme.value.position.push(fontNum + '')
}
</script>
