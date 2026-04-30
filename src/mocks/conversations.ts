import img1 from "@/assets/img/img1.jpg";
import img2 from "@/assets/img/img2.jpg";
import img3 from "@/assets/img/img3.jpg";
import img4 from "@/assets/img/img4.jpg";
import img5 from "@/assets/img/img5.jpg";
import img6 from "@/assets/img/img6.jpg";
import img7 from "@/assets/img/img7.jpg";
import img8 from "@/assets/img/img8.jpg";
import type { ConverstionType } from "@/types/conversation";

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
      text: "Fechado, vou enviar o material final ainda hoje.",
      senderName: "Carlos",
      createdAt: "15:12",
    },
    messages: [
      {
        id: 1,
        senderId: 'me',
        senderName: 'Roberto Silva',
        text: 'Carlos, bom dia! Já conseguiu validar o escopo final com o time?',
        createdAt: '09:14',
        date: '2026-04-26',
        status: 'read'
      },
      {
        id: 2,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Bom dia! Sim, validei agora cedo. Posso te mandar um resumo com os ajustes.',
        createdAt: '09:19',
        date: '2026-04-26',
      },
      {
        id: 3,
        senderId: 'me',
        senderName: 'Roberto Silva',
        text: 'Perfeito. Me manda também o impacto no cronograma, por favor.',
        createdAt: '09:23',
        date: '2026-04-26',
        status: 'read'
      },
      {
        id: 4,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Claro. O ajuste principal ficou na etapa de homologação, com +2 dias.',
        createdAt: '09:31',
        date: '2026-04-27',
      },
      {
        id: 5,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Também anexei o documento consolidado para facilitar a revisão.',
        createdAt: '09:33',
        date: '2026-04-27',
      },
      {
        id: 6,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Vendor SOA DS-000192567.docx.pdf',
        createdAt: '09:34',
        date: '2026-04-27',
        file: {
          name: 'Vendor SOA DS-000192567.docx.pdf',
          type: 'application/pdf',
          sizeKb: 448
        }
      },
      {
        id: 7,
        senderId: 'me',
        senderName: 'Roberto Silva',
        text: 'Ótimo, recebi aqui. Vou revisar e te retorno com feedback até o fim da tarde.',
        createdAt: '10:02',
        date: '2026-04-27',
        status: 'read'
      },
      {
        id: 8,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Combinado. Se precisar, posso entrar em call rápida às 15h.',
        createdAt: '10:05',
        date: '2026-04-28',
      },
      {
        id: 9,
        senderId: 'me',
        senderName: 'Roberto Silva',
        text: 'Perfeito, 15h funciona. Te chamo por aqui.',
        createdAt: '10:07',
        date: '2026-04-28',
        status: 'read'
      },
      {
        id: 10,
        senderId: 101,
        senderName: 'Carlos Mendes',
        text: 'Fechado, vou enviar o material final ainda hoje.',
        createdAt: '15:12',
        date: '2026-04-29',
      },
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
      text: "Concordo com a proposta. Podemos seguir com o plano B.",
      senderName: "Luiz",
      createdAt: "11:42",
    },
    messages: [
      {
        id: 201,
        senderId: 102,
        senderName: "Luiz Ferreira",
        text: "Roberto, revisei o cronograma da implantação.",
        createdAt: "10:55",
        date: "2026-04-28",
      },
      {
        id: 202,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Perfeito. Conseguiu mapear os riscos de integração?",
        createdAt: "11:08",
        date: "2026-04-28",
        status: "read",
      },
      {
        id: 203,
        senderId: 102,
        senderName: "Luiz Ferreira",
        text: "Sim, principalmente no legado financeiro e no export diário.",
        createdAt: "11:27",
        date: "2026-04-29",
      },
      {
        id: 204,
        senderId: 102,
        senderName: "Luiz Ferreira",
        text: "Concordo com a proposta. Podemos seguir com o plano B.",
        createdAt: "11:42",
        date: "2026-04-29",
      },
    ],
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
      text: "Enviei os ajustes de copy para aprovação final.",
      senderName: "Maria",
      createdAt: "16:03",
    },
    messages: [
      {
        id: 301,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Maria, consegue revisar os textos da home ainda hoje?",
        createdAt: "14:12",
        date: "2026-04-27",
        status: "read",
      },
      {
        id: 302,
        senderId: 103,
        senderName: "Maria Silva",
        text: "Consigo sim. Vou fechar headline, CTA e bloco de diferenciais.",
        createdAt: "14:19",
        date: "2026-04-27",
      },
      {
        id: 303,
        senderId: 103,
        senderName: "Maria Silva",
        text: "Enviei os ajustes de copy para aprovação final.",
        createdAt: "16:03",
        date: "2026-04-29",
      },
    ],
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
      text: "Fechei o orçamento com o fornecedor principal.",
      senderName: "Ana",
      createdAt: "09:21",
    },
    messages: [
      {
        id: 401,
        senderId: 104,
        senderName: "Ana Costa",
        text: "Bom dia! Atualizei as cotações com os 3 fornecedores.",
        createdAt: "08:47",
        date: "2026-04-29",
      },
      {
        id: 402,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Ótimo. Consegue fechar com o que tem menor prazo?",
        createdAt: "09:03",
        date: "2026-04-29",
        status: "read",
      },
      {
        id: 403,
        senderId: 104,
        senderName: "Ana Costa",
        text: "Fechei o orçamento com o fornecedor principal.",
        createdAt: "09:21",
        date: "2026-04-29",
      },
    ],
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
      text: "Perfeito, reunião confirmada para amanhã 09h.",
      senderName: "João",
      createdAt: "17:10",
    },
    messages: [
      {
        id: 501,
        senderId: 105,
        senderName: "João Pereira",
        text: "Consegue participar da reunião de alinhamento amanhã cedo?",
        createdAt: "16:56",
        date: "2026-04-29",
      },
      {
        id: 502,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Consigo sim. Me manda o link e pauta.",
        createdAt: "17:01",
        date: "2026-04-29",
        status: "read",
      },
      {
        id: 503,
        senderId: 105,
        senderName: "João Pereira",
        text: "Perfeito, reunião confirmada para amanhã 09h.",
        createdAt: "17:10",
        date: "2026-04-29",
      },
    ],
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
      text: "Segue relatório consolidado em anexo.",
      senderName: "Fernanda",
      createdAt: "12:38",
    },
    messages: [
      {
        id: 601,
        senderId: 106,
        senderName: "Fernanda Alves",
        text: "Segue relatório consolidado em anexo.",
        createdAt: "12:38",
        date: "2026-04-29",
        file: {
          name: "Relatorio_Indicadores_Abril.pdf",
          type: "application/pdf",
          sizeKb: 312,
        },
      },
    ],
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
      text: "Ajustei os acessos dos novos usuários.",
      senderName: "Ricardo",
      createdAt: "08:14",
    },
    messages: [
      {
        id: 701,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Ricardo, liberou acesso para o time de suporte?",
        createdAt: "08:03",
        date: "2026-04-29",
        status: "read",
      },
      {
        id: 702,
        senderId: 107,
        senderName: "Ricardo Lima",
        text: "Ajustei os acessos dos novos usuários.",
        createdAt: "08:14",
        date: "2026-04-29",
      },
    ],
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
    messages: [
      {
        id: 801,
        senderId: 108,
        senderName: "Beatriz Souza",
        text: "Qual e-mail do jurídico para envio do contrato?",
        createdAt: "14:45",
        date: "2026-04-28",
      },
      {
        id: 802,
        senderId: "me",
        senderName: "Roberto Silva",
        text: "Claro! É o juridico@empresa.com",
        createdAt: "14:50",
        date: "2026-04-28",
        status: "read",
      },
    ],
  }
];
