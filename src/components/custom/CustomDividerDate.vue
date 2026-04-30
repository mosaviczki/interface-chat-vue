<template>
  <div class="divider-date">
    <div class="divider" />
    <p>{{date}}</p>
    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  date: string;
}>();
</script>

<style lang="scss" scoped>
.divider-date {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 16px;

  .divider {
    background: rgba(226, 232, 240, 1);
    width: 100%;
    height: 1px;
  }

  p {
    color: rgba(51, 65, 85, 1);
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    flex-shrink: 0;
  }
}
</style>
