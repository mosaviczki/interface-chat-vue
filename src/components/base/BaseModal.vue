<template>
  <Transition :name="animation ? `modal-${animation}` : 'modal-fade'">
    <div
      v-if="modelValue"
      :class="[
        'base-modal',
        { 'full-width': fullWidth, 'full-height': fullHeight },
        variant
      ]"
      @click.self="onClose"
    >
      <div
        :class="['modal-content', rounded]"
        :style="width ? { width: width } : {}"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  align?: "left" | "center" | "right";
  width?: string;
  height?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  modelValue?: boolean;
  rounded?: boolean;
  animation?: "left" | "top" | "bottom" | "right";
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

function onClose() {
  emit("update:modelValue", false);
  emit("close");
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: #fff;
    overflow-y: auto;
    width: var(--modal-width, auto);
    height: var(--modal-height, auto);

    &.rounded {
      border-radius: $radius;
    }
  }

  &.full-width .modal-content {
    width: 100%;
    max-width: none;
  }

  &.full-height .modal-content {
    height: 100%;
    max-height: none;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: end;
  }

  &.left {
    justify-content: flex-start;
  }
}

// Transição padrão (fade + scale)
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

// Transição da esquerda
.modal-left-enter-active,
.modal-left-leave-active {
  transition: all 0.3s ease;
}

.modal-left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.modal-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

// Transição da direita
.modal-right-enter-active,
.modal-right-leave-active {
  transition: all 0.3s ease;
}

.modal-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.modal-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

// Transição de cima
.modal-top-enter-active,
.modal-top-leave-active {
  transition: all 0.3s ease;
}

.modal-top-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.modal-top-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

// Transição de baixo
.modal-bottom-enter-active,
.modal-bottom-leave-active {
  transition: all 0.3s ease;
}

.modal-bottom-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.modal-bottom-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
