import { defineStore } from "pinia";
import { conversations } from "@/mocks/conversations";

type Message = {
  id: number;
  senderId: string;
  senderName?: string;
  text: string;
  createdAt: string;
  date?: string;
  status: string;
  file?: {
    name: string;
    type: string;
    sizeKb: number;
  };
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
  archived: boolean;
  contact?: { name?: string };
  isTyping?: boolean;
  [key: string]: any;
};

const STORAGE_KEY = "chat_conversations_v1";

export const useChatStore = defineStore("chat", {
  state: () => ({
    conversations: [] as Conversation[],
    selectedConversationId: null as number | null,
    archivedPanelOpen: false,
  }),

  getters: {
    selectedConversation(state) {
      return state.conversations.find(
        (conversation) => conversation.id === state.selectedConversationId,
      );
    },
  },

  actions: {
    initStore() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.conversations = JSON.parse(saved);
        return;
      }
      this.conversations = JSON.parse(JSON.stringify(conversations));
      this.persistConversations();
    },

    persistConversations() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.conversations));
    },

    getNowTime() {
      return new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    getTodayDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    selectConversation(id: number) {
      this.selectedConversationId = id;

      const conversation = this.conversations.find((item) => item.id === id);

      if (conversation) {
        conversation.unreadCount = 0;
        this.persistConversations();
      }
    },

    clearSelectedConversation() {
      this.selectedConversationId = null;
    },

    setArchivedPanelOpen(value: boolean) {
      this.archivedPanelOpen = value;
    },

    archiveConversation(id: number) {
      const conversation = this.conversations.find((item) => item.id === id);
      if (!conversation) return;
      conversation.archived = true;
      this.persistConversations();
    },

    unarchiveConversation(id: number) {
      const conversation = this.conversations.find((item) => item.id === id);
      if (!conversation) return;
      conversation.archived = false;
      this.persistConversations();
    },

    toggleArchiveConversation(id: number) {
      const conversation = this.conversations.find((item) => item.id === id);
      if (!conversation) return;
      conversation.archived = !conversation.archived;
      this.persistConversations();
    },

    simulateTyping(conversationId: number) {
      const conversation = this.conversations.find(
        (c) => c.id === conversationId,
      );
      if (!conversation) return;

      conversation.isTyping = true;

      setTimeout(() => {
        conversation.isTyping = false;
        const replyText =
          conversation.id === 1
            ? "Perfeito! Recebi sua mensagem."
            : "Resposta automática";
        this.receiveMessage(conversationId, replyText);
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
        senderName: conversation.contact?.name || "Contato",
        text,
        createdAt: this.getNowTime(),
        date: this.getTodayDate(),
        status: "received",
      });

      conversation.lastMessage = {
        text,
        senderName: conversation.contact?.name || "Contato",
        createdAt: this.getNowTime(),
      };
      this.persistConversations();
    },

    sendMessage(text: string) {
      const conversation = this.selectedConversation;
      if (!conversation) return;

      conversation.messages.push({
        id: Date.now(),
        senderId: "me",
        senderName: "me",
        text,
        createdAt: this.getNowTime(),
        date: this.getTodayDate(),
        status: "sent",
      });

      conversation.lastMessage = {
        text,
        senderName: "me",
        createdAt: this.getNowTime(),
      };

      this.simulateTyping(conversation.id);
      this.persistConversations();
    },

    sendFileMessage(file: { name: string; type: string; sizeKb: number }) {
      const conversation = this.selectedConversation;
      if (!conversation) return;

      conversation.messages.push({
        id: Date.now(),
        senderId: "me",
        senderName: "me",
        text: file.name,
        createdAt: this.getNowTime(),
        date: this.getTodayDate(),
        status: "sent",
        file,
      });

      conversation.lastMessage = {
        text: `Arquivo: ${file.name}`,
        senderName: "me",
        createdAt: this.getNowTime(),
      };

      this.simulateTyping(conversation.id);
      this.persistConversations();
    },
  }
});
