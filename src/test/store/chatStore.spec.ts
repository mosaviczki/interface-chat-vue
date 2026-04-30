import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useChatStore } from "@/stores/chatStore";

describe("chatStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  it("seleciona uma conversa e zera unreadCount", () => {
    const store = useChatStore();
    store.initStore();

    const conversation = store.conversations.find((item) => item.id === 1);
    expect(conversation?.unreadCount).toBe(7);

    store.selectConversation(1);

    expect(store.selectedConversationId).toBe(1);
    expect(store.conversations.find((item) => item.id === 1)?.unreadCount).toBe(
      0,
    );
  });

  it("envia mensagem e simula typing com resposta", async () => {
    vi.useFakeTimers();
    const store = useChatStore();
    store.initStore();
    store.selectConversation(1);

    const conversation = store.selectedConversation;
    expect(conversation).toBeTruthy();
    const initialLength = conversation?.messages.length ?? 0;

    store.sendMessage("Oi");

    expect(conversation?.messages.length).toBe(initialLength + 2);
    expect(
      conversation?.messages.some((message) => message.isTyping),
    ).toBe(true);

    await vi.advanceTimersByTimeAsync(2000);

    expect(
      conversation?.messages.some((message) => message.isTyping),
    ).toBe(false);
    expect(conversation?.messages.length).toBe(initialLength + 2);
    expect(conversation?.lastMessage.text).toBe("Perfeito! Recebi sua mensagem.");

    vi.useRealTimers();
  });
});
