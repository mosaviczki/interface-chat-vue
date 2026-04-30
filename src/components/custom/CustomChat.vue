<template>
    <div class="custom-chat">
        <div v-if="store.selectedConversation" class="custom-chat-container">
            <CustomChatHeader :user="store.selectedConversation.contact" class="custom-chat-header"/>   
            <CustomChatMessage class="container-chat-message" :messages="store.selectedConversation.messages" :user="store.selectedConversation.contact" :isTyping="store.selectedConversation.isTyping" />
            <CustomChatInput @send="onSendMessage" @send-file="onSendFileMessage" />
        </div>
        <div v-else class="no-chat-selected">
            <p>Selecione uma conversa para começar</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomChatHeader from "./CustomChatHeader.vue";
import CustomChatMessage from "./CustomChatMessage.vue";
import CustomChatInput from "./CustomChatInput.vue";
import { useChatStore } from "@/stores/chatStore";
import { onMounted } from "vue";


const store = useChatStore();

onMounted(() => {
  store.initStore();
});

const onSendMessage = (message: string) => {
  store.sendMessage(message);
};

const onSendFileMessage = (file: { name: string; type: string; sizeKb: number }) => {
  store.sendFileMessage(file);
};
</script>

<style lang="scss" scoped>
.custom-chat {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;

    .custom-chat-container{
        display: flex;
        flex-direction: column;
        height: 100vh;

        .container-chat-message{
            flex: 1;
        }
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
