<template>
  <Sidebar />
  <div class="main-content">
    <slot name="main" />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/custom/CustomSidebar.vue';
</script>

<style lang="scss" scoped>
.main-content {
  flex: 1;
  padding: 20px;
}
</style>