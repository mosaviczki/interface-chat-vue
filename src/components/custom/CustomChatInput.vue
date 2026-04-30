<template>
  <div class="custom-chat-input">
    <div class="input-area">
      <BaseInput
        class="chat-input-field"
        variant="text"
        multiline
        :maxLength="2000"
        border
        outlined
        placeholder="Escreva uma mensagem"
        :value="message"
        @input="message = $event"
        @keydown="onInputKeydown"
      />

      <BaseButton variant="icon" size="md" @click="emit('attach')">
      <input
        ref="fileInput"
        type="file"
        class="hidden-file-input"
        @change="onFileSelected"
      />
      </BaseButton>
      <BaseButton variant="outlined" size="md" @click="onAttachClick">
        <img :src="AttachIcon" alt="Anexar" />
      </BaseButton>
      <BaseButton
        variant="contained"
        size="lg"
        color="primary"
        :endIcon="SendIcon"
        @click="onSend"
      >
        Enviar
      </BaseButton>
    </div>
    <p>
      {{ message.length }}/2000 caracteres | Shift + Enter para adicionar uma nova
      linha
    </p>
  </div>
</template>

<script setup lang="ts">
import SendIcon from "@/assets/svg/send-icon.svg";
import AttachIcon from "@/assets/svg/attach-file.svg";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "send", message: string): void;
  (e: "send-file", file: { name: string; type: string; sizeKb: number }): void;
}>();

const message = ref("");
const fileInput = ref<HTMLInputElement | null>(null);

const onSend = () => {
  const text = message.value.trim();
  if (!text) return;
  emit("send", text);
  message.value = "";
};

const onInputKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    onSend();
  }
};

const onAttachClick = () => {
  fileInput.value?.click();
};

const onFileSelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const selectedFile = target.files?.[0];
  if (!selectedFile) return;
  emit("send-file", {
    name: selectedFile.name,
    type: selectedFile.type || "arquivo",
    sizeKb: Math.max(1, Math.round(selectedFile.size / 1024)),
  });
  target.value = "";
};
</script>

<style lang="scss" scoped>
.custom-chat-input {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px;
  border-top: 1px solid $border-color;
  gap: 8px;

  .input-area {
    display: flex;
    align-items: center;
    gap: 8px;

    .chat-input-field {
      flex: 1;
      min-width: 0;
    }
  }
  .hidden-file-input {
    display: none;
  }

  p {
    font-size: $font-size-sm;
    color: $text-primary;
  }
}
</style>
