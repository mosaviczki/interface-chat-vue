<template>
  <div class="custom-channel" v-for="conversations in store.conversations.filter(c => !c.archived)" :key="conversations.id">
    <CustomChannelList
      :name="conversations.contact.name"
      :lastMessage="conversations.lastMessage"
      :imageUser="conversations.contact.avatar"
      :unreadCount="conversations.unreadCount"
      @click="$emit('select-channel', conversations.id)"
    />
  </div>
</template>

<script setup lang="ts">
import CustomChannelList from "@/components/custom/CustomChannelList.vue";
import { useChatStore } from '@/stores/chatStore'

const store = useChatStore()

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
