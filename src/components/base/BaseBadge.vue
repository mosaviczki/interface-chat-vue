<template>
    <div class="base-badge">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    color?: "primary" | "secondary" | "contrast";
}>();
</script>

<style lang="scss" scoped>
.base-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    background-color: $primary-color;
    color: #fff;
    font-family: $font-family;
    font-size: $font-size-badge;
    font-weight: 600;
}
</style>