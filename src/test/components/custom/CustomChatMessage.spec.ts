import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CustomChatMessage from "@/components/custom/CustomChatMessage.vue";

describe("CustomChatMessage", () => {
  it("renderiza mensagens e o estado digitando", () => {
    const wrapper = mount(CustomChatMessage, {
      props: {
        user: {
          name: "Carlos Mendes",
          avatar: "/avatar.png",
        },
        messages: [
          {
            id: 1,
            senderId: "me",
            senderName: "me",
            text: "Oi",
            createdAt: "10:00",
            date: "2026-04-30",
          },
          {
            id: 2,
            senderId: 101,
            senderName: "Carlos Mendes",
            text: "",
            createdAt: "10:01",
            date: "2026-04-30",
            isTyping: true,
          },
        ],
      },
    });

    expect(wrapper.text()).toContain("Oi");
    expect(wrapper.text()).toContain("Digitando");
    expect(wrapper.get('[role="status"]').text()).toContain("Digitando");
  });
});
