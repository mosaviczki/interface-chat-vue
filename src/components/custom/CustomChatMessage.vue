<template>
  <div class="custom-chat-container">
    <div v-for="message in messages" :key="message.id">
      <div
        v-if="message.senderId === 'me'"
        class="custom-chat-message alignment-right"
      >
        <img :src="myAvatar" alt="Roberto Silva" class="img-user" />
        <div class="message-content">
          <p class="user-name">Roberto Silva</p>
          <div class="message-bubble">
            <p>{{ message.text }}</p>
          </div>
          <span class="timestamp">{{ message.createdAt }}</span>
        </div>
      </div>
      <div v-else class="custom-chat-message alignment-left">
        <img :src="user.avatar" :alt="user.name" class="img-user" />
        <div class="message-content">
          <p class="user-name">{{ user.name }}</p>
          <div class="message-bubble">
            <p>{{ message.text }}</p>
          </div>
          <span class="timestamp">{{ message.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import myAvatar from "@/assets/img/img9.jpg";

const props = defineProps<{
  user: {
    name: string;
    image: string;
  }
  messages: {
    id: number;
    senderId: string;
    senderName: string;
    text: string;
    createdAt: string;
  }[];
}>();

const userAvatar = computed(() => {
  return "";
});

const senderName = computed(() => {
  return "Usuário";
});
</script>

<style lang="scss" scoped>
.custom-chat-message {
  display: flex;
  padding: 16px;
  gap: 12px;
}

.alignment-left {
  flex-direction: row;

  .message-content {
    .message-bubble {
      background-color: $secondary-color;
      border: 1px solid $border-color;
      border-radius: $radius;
      padding: 7px 10.5px;
    }
    p {
      font-size: $font-size-md;
      color: $text-secondary;
      font-weight: 500;
    }
  }
}

.alignment-right {
  flex-direction: row-reverse;

  .message-content {
    .message-bubble {
      background-color: $contrast-color;
      border: 1px solid $contrast-color;
      border-radius: $radius;
      padding: 7px 10.5px;
    }

    p {
      font-size: $font-size-md;
      color: #fff;
      font-weight: 500;
    }
  }
}
.custom-chat-message .img-user {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.custom-chat-message .message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .user-name {
    font-weight: 500;
    color: $text-primary;
    font-size: $font-size-lg;
  }

  .message-content {
    padding: 7px 10.5px;
    border-radius: $radius;
  }

  .timestamp {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}
</style>
