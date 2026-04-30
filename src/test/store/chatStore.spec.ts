import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useChatStore } from "@/stores/chatStore";

describe("useChatStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.useFakeTimers();
  });

  it("deve selecionar uma conversa e zerar unreadCount", () => {
    const store = useChatStore();

    store.conversations = [
      {
        id: 1,
        unreadCount: 3,
        archived: false,
        contact: { id: "1", name: "Maria" },
        messages: [],
      } as any,
    ];

    store.selectConversation(1);

    expect(store.selectedConversationId).toBe(1);
    expect(store.conversations[0]!.unreadCount).toBe(0);
  });

  it("deve arquivar e desarquivar uma conversa", () => {
    const store = useChatStore();

    store.conversations = [
      {
        id: 1,
        archived: false,
        contact: { id: "1", name: "Maria" },
        messages: [],
      } as any,
    ];

    store.archiveConversation(1);
    expect(store.conversations[0]!.archived).toBe(true);

    store.unarchiveConversation(1);
    expect(store.conversations[0]!.archived).toBe(false);
  });

  it("deve enviar uma mensagem na conversa selecionada", () => {
    const store = useChatStore();

    store.conversations = [
      {
        id: 1,
        archived: false,
        contact: { id: "1", name: "Maria" },
        messages: [],
        lastMessage: null,
      } as any,
    ];

    store.selectConversation(1);
    store.sendMessage("Olá");

    expect(store.conversations[0]!.messages[0]!.text).toBe("Olá");
    expect(store.conversations[0]!.messages[0]!.senderId).toBe("me");
    expect(store.conversations[0]!.lastMessage.text).toBe("Olá");
  });

  it("deve receber uma mensagem", () => {
    const store = useChatStore();

    store.conversations = [
      {
        id: 1,
        archived: false,
        contact: { id: "1", name: "Maria" },
        messages: [],
        lastMessage: null,
      } as any,
    ];

    store.receiveMessage(1, "Oi");

    expect(store.conversations[0]!.messages[0]!.text).toBe("Oi");
    expect(store.conversations[0]!.messages[0]!.status).toBe("received");
    expect(store.conversations[0]!.lastMessage.text).toBe("Oi");
  });
});
