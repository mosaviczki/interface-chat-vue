<template>
  <div ref="messagesContainer" class="custom-chat-container">
    <div class="container-alert">
      <BaseAlert variant="warning"
        >Todas as conversas podem ser visualizadas pelo gestor do sistema para
        fins de auditoria institucional.</BaseAlert
      >
    </div>
    <div v-for="message in messages" :key="message.id">
      <div v-if="shouldShowDateDivider(message.id)" class="date-divider">
        <CustomDividerDate :date="transformatedDate(message.date)" />
      </div>
      <div
        v-if="message.senderId === 'me'"
        class="custom-chat-message alignment-right"
      >
        <img :src="myAvatar" alt="Roberto Silva" class="img-user" />
        <div class="message-content">
          <p class="user-name">Roberto Silva</p>
          <div class="message-bubble">
            <template v-if="message.file">
              <div class="file-message">
                <div class="file-icon">PDF</div>
                <div class="file-info">
                  <p class="file-name">{{ message.file.name }}</p>
                  <p class="file-meta">
                    {{ formatFileType(message.file.type) }} • {{ message.file.sizeKb }} KB
                  </p>
                </div>
              </div>
            </template>
            <p v-else>{{ message.text }}</p>
          </div>
          <span class="timestamp">{{ message.createdAt }}</span>
        </div>
      </div>
      <div v-else class="custom-chat-message alignment-left">
        <img :src="user.avatar" :alt="user.name" class="img-user" />
        <div class="message-content">
          <p class="user-name">{{ user.name }}</p>
          <div class="message-bubble">
            <template v-if="message.file">
              <div class="file-message">
                <div class="file-icon">PDF</div>
                <div class="file-info">
                  <p class="file-name">{{ message.file.name }}</p>
                  <p class="file-meta">
                    {{ formatFileType(message.file.type) }} • {{ message.file.sizeKb }} KB
                  </p>
                </div>
              </div>
            </template>
            <p v-else>{{ message.text }}</p>
          </div>
          <span class="timestamp">{{ message.createdAt }}</span>
        </div>
      </div>
    </div>
    <div v-if="isTyping" class="custom-chat-message alignment-left">
      <img :src="user.avatar" :alt="user.name" class="img-user" />
      <div class="message-content">
        <p class="user-name">{{ user.name }}</p>
        <div class="message-bubble">
          <div class="typing-indicator" aria-label="Digitando">
            <p>Digitando</p>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import myAvatar from "@/assets/img/img9.jpg";
import BaseAlert from "@/components/base/BaseAlert.vue";
import {transformatedDate} from "@/utils/transformatDate.ts";
import CustomDividerDate from "@/components/custom/CustomDividerDate.vue";

const props = defineProps<{
  user: {
    name: string;
    image: string;
  };
  messages: {
    id: number;
    senderId: string;
    senderName: string;
    text: string;
    date: string;
    createdAt: string;
    file?: {
      name: string;
      type: string;
      sizeKb: number;
    };
  }[];
  isTyping?: boolean;
}>();

const formatFileType = (fileType: string) => {
  if (fileType.includes("pdf")) return "PDF";
  if (fileType.includes("word")) return "DOCX";
  if (fileType.includes("image")) return "Imagem";
  return "Arquivo";
};

const shouldShowDateDivider = (id: number) => {
  const currentIndex = props.messages.findIndex((message) => message.id === id);
  if (currentIndex === 0) return true;
  if (currentIndex < 0) return false;
  const currentMessage = props.messages[currentIndex];
  const previousMessage = props.messages[currentIndex - 1];
  return currentMessage.date !== previousMessage.date;
};

const messagesContainer = ref<HTMLElement | null>(null);
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

watch(
  () => [props.messages.length, props.isTyping],
  () => {
    scrollToBottom();
  },
  { immediate: true },
);

</script>

<style lang="scss" scoped>
.custom-chat-message {
  display: flex;
  padding: 16px;
  gap: 12px;
}
.date-divider {
  padding: 4px 0;
}
.custom-chat-container {
  overflow-y: auto;
}

.container-alert {
  padding: 16px;
  display: block;
  margin: 0 auto;
}

.alignment-left {
  flex-direction: row;

  .message-content {
    .message-bubble {
      background-color: $secondary-color;
      border: 1px solid $border-color;
      border-radius: $radius;
      padding: 7px 10.5px;
    }
    p {
      font-size: $font-size-md;
      color: $text-secondary;
      font-weight: 500;
    }
  }
}

.alignment-right {
  flex-direction: row-reverse;

  .message-content {
    .message-bubble {
      background-color: $contrast-color;
      border: 1px solid $contrast-color;
      border-radius: $radius;
      padding: 7px 10.5px;
    }

    p {
      font-size: $font-size-md;
      color: #fff;
      font-weight: 500;
    }
  }
}
.custom-chat-message .img-user {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.custom-chat-message .message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .user-name {
    font-weight: 500;
    color: $text-primary;
    font-size: $font-size-lg;
  }

  .message-content {
    padding: 7px 10.5px;
    border-radius: $radius;
  }

  .timestamp {
    font-size: $font-size-sm;
    color: $text-secondary;
  }

  .file-message {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 260px;
  }

  .file-icon {
    background: #e11d48;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    border-radius: 6px;
    padding: 8px 6px;
    line-height: 1;
  }

  .file-info {
    .file-name {
      font-size: 14px;
      font-weight: 500;
      color: inherit;
      margin: 0;
      word-break: break-word;
    }

    .file-meta {
      font-size: 12px;
      margin: 4px 0 0;
      color: $text-secondary;
    }
  }

  .typing-indicator {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-height: 16px;

    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $text-secondary;
      animation: typing-bounce 1.2s infinite ease-in-out;
    }

    span:nth-child(2) {
      animation-delay: 0.15s;
    }

    span:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
}

@keyframes typing-bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
}
</style>
