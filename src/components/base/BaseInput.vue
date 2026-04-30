<template>
  <div
    :class="[
      'base-input-wrapper',
      variant,
      size,
      disabled ? 'disabled' : '',
      border ? 'border' : '',
      outlined ? 'outlined' : 'container'
    ]"
  >
    <img
      v-if="startIcon"
      :src="startIcon"
      alt="Start Icon"
      class="start-icon"
    />
    <textarea
      v-if="multiline"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxLength"
      rows="1"
      @input="onInput"
      @keydown="onKeydown"
      @focus="onTextareaResize"
    />
    <input
      v-else
      :type="
        variant === 'password'
          ? 'password'
          : variant === 'email'
            ? 'email'
            : 'text'
      "
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @input="onInput"
      @keydown="onKeydown"
    />
    <img v-if="endIcon" :src="endIcon" alt="End Icon" class="end-icon" />
    <BaseButton
      v-if="variant === 'search' && value.length > 0"
      variant="icon"
      size="sm"
      class="clear-button"
      @click="onClear"
    >
      <img src="@/assets/svg/close.svg" alt="Clear Search" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";

const props = defineProps<{
  variant?: "text" | "password" | "email" | "search";
  outlined?: boolean;
  multiline?: boolean;
  maxLength?: number;
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  border?: boolean;
  value?: string;
  placeholder?: string;
  startIcon?: string;
  endIcon?: string;
  onClear?: () => void;
  handleInput?: (value: string) => void;
}>();

const emit = defineEmits<{
  (e: "input", value: string): void;
  (e: "keydown", event: KeyboardEvent): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  if (target instanceof HTMLTextAreaElement) {
    resizeTextarea(target);
  }
  props.handleInput?.(target.value);
  emit("input", target.value);
};

const onKeydown = (event: KeyboardEvent) => {
  emit("keydown", event);
};

const resizeTextarea = (element: HTMLTextAreaElement) => {
  const lineHeight = 20;
  const maxRows = 10;
  const maxHeight = lineHeight * maxRows;
  element.style.height = "auto";
  element.style.height = `${Math.min(element.scrollHeight, maxHeight)}px`;
  element.style.overflowY = element.scrollHeight > maxHeight ? "auto" : "hidden";
};

const onTextareaResize = (event: FocusEvent) => {
  resizeTextarea(event.target as HTMLTextAreaElement);
};
</script>

<style lang="scss" scoped>
.base-input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  
  border-radius: $radius;
  gap: 7px;
  padding: 8.5px 10.5px;
}
.base-input-wrapper.outlined {
  background-color: transparent !important;
}
.base-input-wrapper.container {
  background-color: $secondary-color;;
}
.base-input-wrapper.border {
  border: 1px solid $border-color;
}
.base-input-wrapper input,
.base-input-wrapper textarea {
  flex: 1;
  border: none;
  background: transparent;
  font-family: $font-family;
  font-size: 14px;
  color: $text-primary;
  outline: none;
  resize: none;
  line-height: 20px;

  &:disabled {
    color: $text-secondary;
    cursor: not-allowed;
  }
}
.base-input-wrapper .start-icon,
.base-input-wrapper .end-icon,
.base-input-wrapper .clear-button img {
  width: 14px;
}
.base-input-wrapper .clear-button {
  margin-left: 8px;
}
</style>
