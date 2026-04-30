import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BaseModal from "@/components/base/BaseModal.vue";

describe("BaseModal", () => {
  it("renderiza o conteudo com alinhamento", () => {
    const wrapper = mount(BaseModal, {
      props: {
        modelValue: true,
        align: "left",
      },
      slots: {
        default: "<div>Conteudo</div>",
      },
    });

    expect(wrapper.find(".base-modal").classes()).toContain("left");
    expect(wrapper.text()).toContain("Conteudo");
  });

  it("nao fecha quando closeOnBackdrop e false", async () => {
    const wrapper = mount(BaseModal, {
      props: {
        modelValue: true,
        closeOnBackdrop: false,
      },
    });

    (wrapper.vm as any).$?.setupState?.onBackdropClick();

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.emitted("close")).toBeUndefined();
  });
});
