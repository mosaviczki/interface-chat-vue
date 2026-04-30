import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CustomChatInput from "@/components/custom/CustomChatInput.vue";

describe("CustomChatInput", () => {
  it("envia mensagem ao pressionar Enter", async () => {
    const wrapper = mount(CustomChatInput);
    const textarea = wrapper.get("textarea");

    await textarea.setValue("Olá");
    await textarea.trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("send")).toEqual([["Olá"]]);
  });

  it("nao envia mensagem com Shift+Enter", async () => {
    const wrapper = mount(CustomChatInput);
    const textarea = wrapper.get("textarea");

    await textarea.setValue("Linha 1");
    await textarea.trigger("keydown", { key: "Enter", shiftKey: true });

    expect(wrapper.emitted("send")).toBeUndefined();
  });

  it("emite arquivo selecionado", async () => {
    const wrapper = mount(CustomChatInput);
    const fileInput = wrapper.get('input[type="file"]');
    const file = new File(["conteudo"], "arquivo.pdf", { type: "application/pdf" });

    Object.defineProperty(fileInput.element, "files", {
      value: [file],
    });

    await fileInput.trigger("change");

    const emittedFiles = wrapper.emitted("send-file") ?? [];

    expect(emittedFiles).toHaveLength(1);
    const firstEmission = emittedFiles[0];
    if (!firstEmission) {
      throw new Error("Expected one send-file emission");
    }

    expect(firstEmission[0]).toMatchObject({
      name: "arquivo.pdf",
      type: "application/pdf",
      sizeKb: 1,
    });
  });
});
