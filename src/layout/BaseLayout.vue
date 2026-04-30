<template>
  <Sidebar v-if="showSidebar" />
  <div class="main-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Sidebar from '@/components/custom/CustomSidebar.vue';
import { useChatStore } from "@/stores/chatStore";

const store = useChatStore();
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 780);

const showSidebar = computed(() => {
  if (!isMobile.value) return true;
  if (store.archivedPanelOpen) return true;
  return !store.selectedConversationId;
});

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<style lang="scss" scoped>
.main-content {
  flex: 1;

  @media screen and (max-width: 780px){
    max-width: 100vw;
  } 
}
</style>
