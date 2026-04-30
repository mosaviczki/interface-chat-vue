<template>
  <div class="custom-chat">
    <div v-if="store.selectedConversation && store.selectedConversation.contact" class="custom-chat-container">
      <CustomChatHeader
        :user="selectedUser"
        class="custom-chat-header"
      />
      <CustomChatMessage
        class="container-chat-message"
        :messages="store.selectedConversation.messages"
        :user="store.selectedConversation.contact"
      />
      <CustomChatInput @send="onSendMessage" @send-file="onSendFileMessage" />
    </div>
        <div v-else-if="!isMobile" class="no-chat-selected">
            <p>Selecione uma conversa para começar</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomChatHeader from "./CustomChatHeader.vue";
import CustomChatMessage from "./CustomChatMessage.vue";
import CustomChatInput from "./CustomChatInput.vue";
import { useChatStore } from "@/stores/chatStore";
import { computed, onMounted, ref } from "vue";

const store = useChatStore();
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 780);

const selectedUser = computed(() => {
  const contact = store.selectedConversation?.contact;

  return {
    avatar: contact?.avatar ?? "",
    name: contact?.name ?? "",
  };
});

onMounted(() => {
  store.initStore();
  window.addEventListener("resize", onResize);
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

const onSendMessage = (message: string) => {
  store.sendMessage(message);
};

const onSendFileMessage = (file: {
  name: string;
  type: string;
  sizeKb: number;
}) => {
  store.sendFileMessage(file);
};
</script>

<style lang="scss" scoped>
.custom-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  .custom-chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .container-chat-message {
      flex: 1;
    }
  }
}

.mobile-chat-back {
  display: none;
}

@media (max-width: 780px) {
  .mobile-chat-back {
    display: flex;
    padding: 8px 16px 0;
  }

  .back-button {
    border: 0;
    background: transparent;
    color: $text-secondary;
    font-size: 14px;
    cursor: pointer;
    padding: 6px 0;
  }
}

.no-chat-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: $text-secondary;
}
</style>
