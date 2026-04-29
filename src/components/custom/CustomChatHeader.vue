<template>
  <div class="custom-chat-header">
    <div class="user-info">
      <img :src="user.avatar" :alt="user.name" class="chat-user-image" />
      <h1>{{ user.name }}</h1>
    </div>
    <BaseButton variant="outlined" size="lg" :startIcon="ArchiveIcon">
      <p>Arquivar</p>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import ArchiveIcon from "@/assets/svg/box-archive.svg";
defineProps<{
  user: {
    image: string;
    name: string;
  };
}>();
</script>

<style lang="scss" scoped>
.custom-chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px;
  border-bottom: 1px solid $border-color;

  .user-info {
    display: flex;
    align-items: center;

    .chat-user-image {
      width: $icon-size-lg;
      height: $icon-size-lg;
      border-radius: 50%;
      margin-right: 12px;
      object-fit: cover;
    }

    h1 {
      font-size: $font-size-lg;
      font-weight: 500;
      color: $text-primary;
    }
  }
}
</style>
