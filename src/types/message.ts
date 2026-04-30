export type MessageType = {
  id: number;
  senderId: number | string;
  senderName: string;
  text: string;
  createdAt: string;
  date: string;
  status?: string;
  isTyping?: boolean;
  file?: {
    name: string;
    type: string;
    sizeKb: number;
  };
};

export type LastMessageType = {
  text: string;
  senderName: string;
  createdAt: string;
};
