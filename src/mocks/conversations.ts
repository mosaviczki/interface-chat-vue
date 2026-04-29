import img1 from "@/assets/img/img1.jpg";
import img2 from "@/assets/img/img2.jpg";
import img3 from "@/assets/img/img3.jpg";
import img4 from "@/assets/img/img4.jpg";
import img5 from "@/assets/img/img5.jpg";
import img6 from "@/assets/img/img6.jpg";
import img7 from "@/assets/img/img7.jpg";
import img8 from "@/assets/img/img8.jpg";
import { ConverstionType } from "@/types/conversation";

const avatars = [img1, img2, img3, img4, img5, img6, img7, img8];

export const conversations: ConverstionType[] = [
  {
    id: 1,
    contact: {
      id: 101,
      name: "Carlos Mendes",
      avatar: img1,
      status: "online",
    },
    archived: false,
    unreadCount: 7,
    lastMessage: {
      text: "Digitando...",
      senderName: "Carlos",
      createdAt: "14:50",
      isTyping: true,
    },
    messages: [
      {
        id: 1,
        senderId: 'me',
        senderName: 'Roberto Silva',
        text: 'Olá Carlos, tudo bem com você?',
        createdAt: '13:45',
        date: '2026-03-01',
        status: 'read'
      },
      {
        id: 2,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Bom dia Roberto, por aqui tudo certo! E com você?',
        createdAt: '13:56',
        date: '2026-03-01',
      },
      {
        id: 3,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Digitando...',
        status: 'typing',
        createdAt: '',
        date: '2026-03-01',
        isTyping: true
      }
    ],
  },
  {
    id: 2,
    contact: {
      id: 102,
      name: "Luiz Ferreira",
      avatar: img2,
      status: "offline",
    },
    archived: false,
    unreadCount: 7,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Luiz",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 3,
    contact: {
      id: 103,
      name: "Maria Silva",
      avatar: img3,
      status: "offline",
    },
    archived: false,
    unreadCount: 7,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Maria",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 4,
    contact: {
      id: 104,
      name: "Ana Costa",
      avatar: img4,
      status: "offline",
    },
    archived: false,
    unreadCount: 7,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Maria",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 5,
    contact: {
      id: 105,
      name: "João Pereira",
      avatar: img5,
      status: "offline",
    },
    archived: false,
    unreadCount: 0,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Maria",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 6,
    contact: {
      id: 106,
      name: "Fernanda Alves",
      avatar: img6,
      status: "offline",
    },
    archived: false,
    unreadCount: 0,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Maria",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 7,
    contact: {
      id: 107,
      name: "Ricardo Lima",
      avatar: img7,
      status: "offline",
    },
    archived: false,
    unreadCount: 0,
    lastMessage: {
      text: "Concordo com a proposta...",
      senderName: "Maria",
      createdAt: "14:50",
    },
    messages: [],
  },
  {
    id: 8,
    contact: {
      id: 108,
      name: "Beatriz Souza",
      avatar: img8,
      status: "offline",
    },
    archived: true,
    unreadCount: 0,
    lastMessage: {
      text: "Claro! É o juridico@empresa.com",
      senderName: "me",
      createdAt: "14:50",
    },
    messages: [],
  }
];
