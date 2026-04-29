<template>
    <div :class="['base-modal', { 'full-width': fullWidth, 'full-height': fullHeight }, variant]" @click.self="$emit('close')">
        <div class="modal-content" :style="width ? {width: width} : {}">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    align?: "left" | "center" | "right";
    width?: string;
    height?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
}>();
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
        border-radius: $radius;
        padding: 16px;
        max-width: 90%;
        max-height: 90%;
        overflow-y: auto;
        width: var(--modal-width, auto);
        height: var(--modal-height, auto);
    }

    &.full-width .modal-content {
        width: 100%;
        max-width: none;
    }

    &.full-height .modal-content {
        height: 100%;
        max-height: none;
    }

    &.center{
        justify-content: center;
    }

    &.right{
        justify-content: end;
    }

    &.left{
        justify-content: flex-start;
    }
}
</style>