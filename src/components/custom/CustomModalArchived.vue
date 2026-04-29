<template>
  <div class="custom-modal-archived">
    <BaseModal
      v-model="isOpen"
      align="left"
      fullHeight
      width="321px"
    >
      <div>
        <BaseButton
          variant="text"
          size="md"
          align="left"
          textColor="rgba(100, 116, 139, 1)"
          class="archived-channels-button"
          :startIcon="ArchiveIcon"
          @click="onClose"
        >
          Voltar
        </BaseButton>
        <p>Modal de conversas arquivadas</p>
      </div>
      <p
        v-if="store.conversations.filter((c) => c.archived).length === 0"
        class="no-archived"
      >
        Nenhuma conversa arquivada
      </p>
      <div v-else class="archived-channels-list">
        <CustomChannelListMessage
          v-for="conversation in store.conversations.filter((c) => c.archived)"
          :key="conversation.id"
          :name="conversation.contact.name"
          :lastMessage="conversation.lastMessage.text"
          :timestamp="conversation.lastMessage.createdAt"
          :unreadCount="conversation.unreadCount"
          :imageUser="conversation.contact.avatar"
        />
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseModal from "../base/BaseModal.vue";
import ArchiveIcon from "@/assets/svg/box-archive.svg";
import CustomChannelListMessage from "./CustomChannelListMessage.vue";
import { useChatStore } from "@/stores/chatStore";

const store = useChatStore();

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const isOpen = computed({
  get: () => props.modelValue ?? false,
  set: (value) => emit("update:modelValue", value),
});

function onClose() {
  isOpen.value = false;
}
</script>

<style lang="scss" scoped>
.custom-modal-archived {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
