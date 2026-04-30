<template>
  <button
    :class="['base-channel-list-message', variant, size, { selected }]"
    @click="$emit('click')"
  >
    <img v-if="imageUser" :src="imageUser" :alt="name" class="img-user" />
    <div class="user-info">
      <h2>{{ name }}</h2>
      <p v-if="lastMessage.senderName === 'me'">Você: {{ truncatedText }}</p>
      <p v-else>{{ lastMessage.senderName.split(" ")[0] }}: {{ truncatedText }}</p>
    </div>
    <div class="message-meta">
      <span class="timestamp">{{ lastMessage.createdAt }}</span>
      <BaseBadge v-if="unreadCount > 0" :class="{ 'unread-count': true }">
        {{ unreadCount }}
      </BaseBadge>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseBadge from "@/components/base/BaseBadge.vue";

const props = defineProps<{
  variant?: "text" | "icon" | "contained" | "outlined";
  size?: "lg" | "md" | "sm";
  selected?: boolean;
  name: string;
  lastMessage: {
    senderName: string;
    text: string;
    createdAt: string;
  };
  unreadCount: number;
  imageUser?: string;
  maxLength?: number;
}>();

const maxChars = computed(() => props.maxLength ?? 22);

const truncatedText = computed(() => {
  if (!props.lastMessage?.text) return "";
  const text = props.lastMessage.text;
  return text.length > maxChars.value ? text.slice(0, maxChars.value) + "..." : text;
});
</script>

<style lang="scss" scoped>
.base-channel-list-message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: transparent;

  .selected {
    background-color: $selected-color;
  }

  .img-user {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 6px;
    object-fit: cover;
  }

  .message-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .timestamp {
      font-size: $font-size-md;
      color: $text-primary;
      margin-bottom: 4px;
    }

    .unread-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background-color: $primary-color;
      color: #fff;
      font-size: 10px;
      border-radius: 50%;
    }
  }
}
.base-channel-list-message .user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Inter', sans-serif;

  h2 {
    font-size: $font-size-lg;
    font-weight: 500;
    color: $text-primary;
    line-height: 26px;
  }

  p {
    font-size: 12px;
    color: $text-secondary;
  }
}
</style>
