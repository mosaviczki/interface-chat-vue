<template>
  <div class="custom-channel" v-for="conversations in store.conversations.filter(c => !c.archived)" :key="conversations.id">
    <CustomChannelListMessage
      :name="conversations.contact.name"
      :lastMessage="conversations.lastMessage"
      :imageUser="conversations.contact.avatar"
      :unreadCount="conversations.unreadCount"
      @click="$emit('select-channel', conversations.id)"
    />
  </div>
</template>

<script setup lang="ts">
import CustomChannelListMessage from "@/components/custom/CustomChannelListMessage.vue";
import ImageUser from "@/assets/img/img1.jpg";
import { useChatStore } from '@/stores/chatStore'

const store = useChatStore()

defineProps<{
  channel: {
    id: string | number;
  };
}>();

defineEmits<{
  (e: "select-channel", id: string | number): void;
}>();

</script>

<style lang="scss" scoped>
.custom-channel {
  max-height: calc(100vh - 180px);
  overflow-y: auto;
}
</style>
