<template>
  <button
    :class="[
      'base-button',
      variant,
      size,
      align ? align : 'left',
      { disabled },
    ]"
    :disabled="disabled"
    :style="textColor ? { color: textColor } : {}"
  >
    <img
      v-if="startIcon"
      :src="startIcon"
      alt="Start Icon"
      class="start-icon"
    />
    <slot />
    <img v-if="endIcon" :src="endIcon" alt="End Icon" class="end-icon" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: "text" | "icon" | "contained" | "outlined";
  color?: "primary" | "secondary" | "contrast";
  textColor?: string;
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  align?: "left" | "center" | "right";
}>();
</script>

<style lang="scss" scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: $radius;
  cursor: pointer;
  &.left {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  &.primary {
    background-color: $primary-color;
    color: #fff;
    &:hover:not(.disabled) {
      background-color: darken($primary-color, 10%);
    }
  }
  &.secondary {
    background-color: $secondary-color;
    color: $text-secondary;
    &:hover:not(.disabled) {
      background-color: darken($secondary-color, 10%);
    }
  }
  &.contrast {
    background-color: $contrast-color;
    color: #fff;
    &:hover:not(.disabled) {
      background-color: darken($contrast-color, 10%);
    }
  }
  &.text {
    background-color: transparent;
    color: $text-primary;
    &:hover:not(.disabled) {
      background-color: rgba($text-primary, 0.05);
    }
  }
  &.icon {
    background-color: transparent;
    width: $icon-size-lg;
  }
  &.contained {
    background-color: $primary-color;
    color: #fff;
    &:hover:not(.disabled) {
      background-color: darken($primary-color, 10%);
    }
  }
  &.outlined {
    border: 1px solid $border-color !important;
    background: transparent;
  }
  &.disabled {
    background-color: $border-color;
    color: $text-secondary;
    cursor: not-allowed;
  }
  &.lg {
    padding-top: 8.75px;
    padding-bottom: 8.75px;
  }
  &.md {
    padding-top: 6.25px;
    padding-bottom: 6.25px;
  }
  &.sm {
    padding-top: 3.75px;
    padding-bottom: 3.75px;
  }
  .start-icon {
    margin-right: 7px;
  }
}
</style>
