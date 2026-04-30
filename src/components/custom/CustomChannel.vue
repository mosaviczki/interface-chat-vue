<template>
  <div class="custom-channel" v-for="conversations in filteredConversations" :key="conversations.id">
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
import { computed } from "vue";
import CustomChannelList from "@/components/custom/CustomChannelList.vue";
import { useChatStore } from '@/stores/chatStore'

const store = useChatStore()
const props = defineProps<{
  searchQuery?: string;
}>();

const filteredConversations = computed(() => {
  const query = (props.searchQuery ?? "").trim().toLowerCase();
  return store.conversations.filter((conversation) => {
    if (conversation.archived) return false;
    if (!query) return true;
    return (conversation.contact?.name ?? "").toLowerCase().includes(query);
  });
});

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
