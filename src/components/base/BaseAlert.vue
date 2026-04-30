<template>
    <div class="base-alert" :class="variant">
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    variant?: "success" | "error" | "warning" | "info";
}>();
</script>

<style lang="scss" scoped>
.base-alert {
    padding: 7px 10.5px;
    border-radius: $radius;
    font-family: $font-family;
    font-size: $font-size-md;
    font-weight: 500;
    width: fit-content;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &.success {
        background-color: $success-background-color;
        color: $success-color;
        border: 1px solid $success-border-color;
    }
    &.error {
        background-color: $error-background-color;
        color: $error-color;
        border: 1px solid $error-border-color;
    }
    &.warning {
        background-color: $warning-background-color;
        color: $warning-color;
        border: 1px solid $warning-border-color;
    }
    &.info {
        background-color: $info-background-color;
        color: $info-color;
        border: 1px solid $info-border-color;
    }
}
</style>