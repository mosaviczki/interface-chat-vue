// src/test/BaseModal.spec.ts

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseModal from "@/components/base/BaseModal.vue";

describe("BaseModal", () => {
  it("deve renderizar o conteúdo quando modelValue for true", () => {
    const wrapper = mount(BaseModal, {
      props: {
        modelValue: true,
      },
      slots: {
        default: "Conteúdo do modal",
      },
    });

    expect(wrapper.text()).toContain("Conteúdo do modal");
  });

  it("não deve renderizar quando modelValue for false", () => {
    const wrapper = mount(BaseModal, {
      props: {
        modelValue: false,
      },
      slots: {
        default: "Conteúdo do modal",
      },
    });

    expect(wrapper.text()).not.toContain("Conteúdo do modal");
  });
});
