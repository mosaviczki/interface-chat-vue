<template>
  <Sidebar />
  <div class="main-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/custom/CustomSidebar.vue';
</script>

<style lang="scss" scoped>
.main-content {
  flex: 1;
}
</style>