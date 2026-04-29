<template>
  <div class="custom-chat-message" :class="`alignment-${alignment}`">
    <img src="{user.image}" alt="{user.name}" class="img-user" />
    <div class="message-content">
      <p class="user-name">{user.name}</p>
      <div class="message-content">
        <p>{message}</p>
      </div>
      <span class="timestamp">{timestamp}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    name: string;
    image: string;
  };
  message: string;
  timestamp: string;
  alignment?: "left" | "right";
}>();
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
    background-color: $secondary-color;
    border: 1px solid $border-color;

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
    background-color: $contrast-color;
    border: 1px solid $contrast-color;

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
