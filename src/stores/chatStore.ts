import { defineStore } from "pinia";
import { conversations } from "@/mocks/conversations";

type Message = {
  id: number;
  senderId: string;
  text: string;
  createdAt: string;
  status: string;
};

type LastMessage = {
  text: string;
  senderName: string;
  createdAt: string;
};

type Conversation = {
  id: number;
  unreadCount: number;
  messages: Message[];
  lastMessage: LastMessage;
  [key: string]: any;
};

export const useChatStore = defineStore("chat", {
  state: () => ({
    conversations: conversations as Conversation[],
    selectedConversationId: null as number | null,
  }),

  getters: {
    selectedConversation(state) {
      return state.conversations.find(
        (conversation) => conversation.id === state.selectedConversationId,
      );
    },
  },

  actions: {
    selectConversation(id: number) {
      this.selectedConversationId = id;

      const conversation = this.conversations.find((item) => item.id === id);

      if (conversation) {
        conversation.unreadCount = 0;
      }
    },

    simulateTyping(conversationId: number) {
      const conversation = this.conversations.find(
        (c) => c.id === conversationId,
      );
      if (!conversation) return;

      conversation.isTyping = true;

      setTimeout(() => {
        conversation.isTyping = false;

        // depois de "digitar", envia resposta fake
        this.receiveMessage(conversationId, "Resposta automática");
      }, 2000);
    },

    receiveMessage(conversationId: number, text: string) {
      const conversation = this.conversations.find(
        (c) => c.id === conversationId,
      );
      if (!conversation) return;

      conversation.messages.push({
        id: Date.now(),
        senderId: "other",
        text,
        createdAt: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "received",
      });
    },

    sendMessage(text: string) {
      const conversation = this.selectedConversation;
      if (!conversation) return;

      conversation.messages.push({
        id: Date.now(),
        senderId: "me",
        text,
        createdAt: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "sent",
      });

      this.simulateTyping(conversation.id);
    }
  }
});
