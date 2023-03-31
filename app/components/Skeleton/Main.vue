<template>
    <div class="skeleton-item">
        xxx
        {{ SkeletonRoot?.loading ? '加載中' : '加載完成' }}
    </div>
</template>
<script setup lang="ts">
import { SkeletonProvide } from './hook'
const SkeletonRoot = inject(SkeletonProvide, undefined)

</script>
