import type { LastMessageType, MessageType } from "./message";
import type { UserType } from "./user";

export type ConverstionType = {
  id: number;
  contact: UserType;
  archived: boolean;
  unreadCount: number;
  lastMessage: LastMessageType;
  messages: MessageType[];
};
