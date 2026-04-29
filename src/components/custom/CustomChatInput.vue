<template>
  <div class="custom-chat-input">
    <div class="input-area">
      <BaseInput
        variant="text"
        size="md"
        placeholder="Digite sua mensagem..."
        :value="message"
        @input="$emit('input', $event)"
      />

      <BaseButton variant="icon" size="md" @click="$emit('attach')">
        <img src="{AttachIcon}" alt="Anexar" />
      </BaseButton>
      <BaseButton
        variant="text"
        size="md"
        startIcon="SendIcon"
        @click="$emit('send')"
      >
        <p>Enviar</p>
      </BaseButton>
    </div>
    <p>
      {message.length}/2000 caracteres | Shift + Enter para adicionar uma nova
      linha
    </p>
  </div>
</template>

<script setup lang="ts">
import SendIcon from "@/assets/svg/send-icon.svg";
import AttachIcon from "@/assets/svg/attach-file.svg";
import { ref } from "vue";

const message = ref("");
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
    justify-content: space-between;

    .base-input {
      flex: 1;
      margin-right: 8px;
    }
  }

  p {
    font-size: $font-size-sm;
    color: $text-primary;
  }
}
</style>
