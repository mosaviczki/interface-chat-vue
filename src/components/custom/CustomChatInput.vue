<template>
  <div class="custom-chat-input">
    <div class="input-area">
      <BaseInput
        class="chat-input-field"
        variant="text"
        border
        outlined
        placeholder="Escreva uma mensagem"
        :value="message"
        @input="message = $event"
      />

      <BaseButton variant="icon" size="md" @click="$emit('attach')">
        <img :src="AttachIcon" alt="Anexar" />
      </BaseButton>
      <BaseButton
        variant="text"
        size="md"
        :startIcon="SendIcon"
        @click="$emit('send')"
      >
        <p>Enviar</p>
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
import BaseInput from "@/components/base/BaseInput.vue"
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
    gap: 8px;

    .chat-input-field {
      flex: 1;
      min-width: 0;
    }
  }

  p {
    font-size: $font-size-sm;
    color: $text-primary;
  }
}
</style>
