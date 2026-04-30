<template>
  <aside class="custom-sidebar">
    <div class="header">
      <div>
        <h1>Central de Comunicação</h1>
        <p>Comunicação interna</p>
      </div>
      <BaseButton variant="icon" size="lg" aria-label="Nova conversa">
        <img src="@/assets/svg/add-comment.svg" alt="" aria-hidden="true" />
      </BaseButton>
    </div>
    <div class="channels">
      <div class="search-and-archived">
        <BaseInput
          variant="search"
          size="md"
          placeholder="Buscar conversas"
          :startIcon="SearchIcon"
          :handleInput="handleSearchInput"
          :value="searchQuery"
          :onClear="onClear"
        />
        <BaseButton
          variant="text"
          size="md"
          align="left"
          textColor="rgba(100, 116, 139, 1)"
          class="archived-channels-button"
          :startIcon="ArchiveIcon"
          @click="handleOpenModalArchivedChannels"
        >
          Conversas arquivadas
        </BaseButton>
      </div>
      <CustomChannel :searchQuery="searchQuery" @select-channel="handleSelectChannel" />
      <CustomModalArchived
        v-model="isOpenModalArchivedChannels"
        @select-channel="handleSelectChannel"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import SearchIcon from "@/assets/svg/icon-search.svg";
import ArchiveIcon from "@/assets/svg/box-archive.svg";
import CustomChannel from "@/components/custom/CustomChannel.vue";
import CustomModalArchived from "@/components/custom/CustomModalArchived.vue";
import { useChatStore } from "@/stores/chatStore";

import { onMounted, ref, watch } from "vue";

const store = useChatStore();
const searchQuery = ref("");
const isOpenModalArchivedChannels = ref(false);

onMounted(() => {
  store.initStore();
});

function onClear() {
  searchQuery.value = "";
}

function handleSearchInput(value: string) {
  searchQuery.value = value;
}

function handleOpenModalArchivedChannels() {
  isOpenModalArchivedChannels.value = true;
  store.setArchivedPanelOpen(true);
}

function handleSelectChannel(id: number) {
  store.selectConversation(id);
  if (window.innerWidth < 780) {
    isOpenModalArchivedChannels.value = false;
    store.setArchivedPanelOpen(false);
  }
}

watch(isOpenModalArchivedChannels, (value) => {
  store.setArchivedPanelOpen(value);
});
</script>

<style lang="scss" scoped>
.custom-sidebar {
  width: 321px;
  height: 100vh;
  max-height: 100vh;
  background-color: white;
  border-right: 1px solid $border-color;
}
.custom-sidebar .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $border-color;
  padding: 16px;

  h1 {
    font-size: $font-size-lg;
    font-weight: 500;
    color: $text-primary;
    line-height: 26px;
  }

  p {
    font-size: $font-size-sm;
    color: $text-secondary;
    line-height: 22px;
  }
}

.custom-sidebar .search-and-archived {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 16px 8px;

  .archived-channels-button {
    width: 100%;
    padding-left: 10.5px;
    padding-right: 10.5px;
  }
}

@media (max-width: 780px) {
  .custom-sidebar {
    width: 100%;
  }
}
</style>
