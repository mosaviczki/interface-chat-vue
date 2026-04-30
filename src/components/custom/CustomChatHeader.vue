<template>
  <div class="custom-chat-header">
    <div class="container-info">
      <div v-if="isMobile" class="mobile-chat-back">
        <BaseButton variant="icon" class="back-button" @click="onBackToList">
          <img :src="BackIcon" alt="Back" />
        </BaseButton>
      </div>
      <div class="user-info">
        <img :src="user.avatar" :alt="user.name" class="chat-user-image" />
        <h1>{{ user.name }}</h1>
      </div>
    </div>
    <BaseButton
      class="archive-button"
      variant="outlined"
      size="lg"
      :startIcon="ArchiveIcon"
      textColor="rgba(100, 116, 139, 1)"
      @click="onToggleArchive"
    >
      {{ isMobile ? "" : isArchived ? "Desarquivar" : "Arquivar" }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ArchiveIcon from "@/assets/svg/box-archive.svg";
import BaseButton from "@/components/base/BaseButton.vue";
import BackIcon from "@/assets/svg/back-icon.svg";
import { useChatStore } from "@/stores/chatStore";

const props = defineProps<{
  user: {
    avatar: string;
    name: string;
  };
}>();

const store = useChatStore();

const isArchived = computed(() => !!store.selectedConversation?.archived);

const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 780);

const onToggleArchive = () => {
  const selectedId = store.selectedConversation?.id;
  if (!selectedId) return;
  store.toggleArchiveConversation(selectedId);
};

const onBackToList = () => {
  store.clearSelectedConversation();
};
</script>

<style lang="scss" scoped>
.custom-chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px;
  border-bottom: 1px solid $border-color;

  .container-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    min-width: 0;

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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media (max-width: 780px) {
  .custom-chat-header {
    padding: 12px;
    gap: 8px;
    overflow-x: hidden;

    .user-info .chat-user-image {
      width: 36px;
      height: 36px;
      margin-right: 8px;
    }

    .user-info h1 {
      font-size: 20px;
    }
  }

  .archive-button {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}
</style>
