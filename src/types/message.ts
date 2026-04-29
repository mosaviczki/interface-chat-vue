export type MessageType = {
  id: number;
  senderId: number | string;
  senderName: string;
  text: string;
  createdAt: string;
  date: string;
  status?: string;
  isTyping?: boolean;
};

export type LastMessageType = {
  text: string;
  senderName: string;
  createdAt: string;
  isTyping?: boolean;
};
