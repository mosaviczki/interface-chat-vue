<template>
  <div class="custom-modal-archived">
    <BaseModal
      v-model="isOpen"
      align="left"
      animation="left"
      fullHeight
      width="321px"
      :closeOnBackdrop="false"
      @close="onClose"
    >
      <div class="modal-content">
        <div class="modal-header">
          <BaseButton
            variant="icon"
            class="archived-channels-button"
            aria-label="Voltar"
            @click="onClose"
          >
            <img :src="BackIcon" alt="" aria-hidden="true" />
          </BaseButton>
          <p>Arquivadas</p>
        </div>
        <p
          v-if="store.conversations.filter((c) => c.archived).length === 0"
          class="no-archived"
        >
          Nenhuma conversa arquivada
        </p>
        <div
          v-else
          class="archived-channels-list"
          v-for="conversations in store.conversations.filter(
            (c) => c.archived,
          )"
          :key="conversations.id"
        >
          <CustomChannelList
            :name="conversations.contact.name"
            :lastMessage="conversations.lastMessage"
            :imageUser="conversations.contact.avatar"
            :unreadCount="conversations.unreadCount"
            :selected="store.selectedConversationId === conversations.id"
            @click="handleSelectArchivedChannel(conversations.id)"
          />
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseModal from "../base/BaseModal.vue";
import BaseButton from "../base/BaseButton.vue";
import BackIcon from "@/assets/svg/back-icon.svg";
import CustomChannelList from "./CustomChannelList.vue";
import { useChatStore } from "@/stores/chatStore";

const store = useChatStore();

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "select-channel", id: number): void;
}>();

const isOpen = computed({
  get: () => props.modelValue ?? false,
  set: (value) => {
    emit("update:modelValue", value);
    store.setArchivedPanelOpen(value);
  },
});

function onClose() {
  isOpen.value = false;
}

function handleSelectArchivedChannel(id: number) {
  emit("select-channel", id);
}
</script>

<style lang="scss" scoped>
.custom-modal-archived {
  position: relative;
  width: 100%;

  .modal-content {
    height: 100vh;
    border-right: 1px solid $border-color;

    .no-archived{
      padding: 16px
    }
  }

  .modal-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $border-color;
    padding: 16px;
  }

  .archived-channels-list {
    overflow-y: auto;
    max-height: calc(100vh - 52px);
  }
}

@media (max-width: 780px) {
  .custom-modal-archived :deep(.modal-content) {
    width: 100% !important;
  }
}
</style>
