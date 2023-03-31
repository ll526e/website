<template>
    <div class="skeleton-wrap">
        <SkeletonMain></SkeletonMain>
    </div>
</template>
<script setup lang="ts">
import { SkeletonProvide } from './hook'
const props = defineProps({
    loading: Boolean
})

provide(SkeletonProvide, reactive(
    {
        ...toRefs(props)
    }
))

</script>
