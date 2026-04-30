## Project Setup
### Requirements
```sh
node: ^20.19.0 || >=22.12.0
```
### Init
```sh
git clone https://github.com/mosaviczki/interface-chat-vue.git
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Test

```sh
npm run test
```

## Descrição
Interface de uma Central de Comunicação (Chat) com base no layout disponibilizado no figma, contemplando uma estruturação com:
- Sidebar lateral com navegação
- Lista de conversas
- Área principal do chat
- Campo de digitação
- Botão de envio
- Selecionar conversa da lista e exibir mensagens
- Enviar nova mensagem no chat
- Exibir estado "digitando..."
- Scroll na lista de mensagens
- Enter envia mensagem
- Shift + Enter quebra linha
- Responsividade

## Tecnologias
- Vue3 com Composition API
- TypeScript
- SASS
- Pinia
- Vitest

## Decisões técnicas
- Adotei Pinia para concentrar o estado do chat, facilitando a comunicação entre sidebar, área principal e modais.
- Os dados iniciais são mockados e persistidos em `localStorage`, permitindo demonstrar o fluxo da aplicação sem depender de backend.
- O estado "digitando..." foi modelado como uma mensagem temporária na lista, evitando estados paralelos e simplificando a renderização.
- Foi implementado testes bases com Vitest por serem testes simples de componentes, visto que ele possui uma boa performace de execução e integração nativa com Vite.
- A interface foi pensada para ser responsiva com adaptação para mobile.

## Estrutura do Projeto
```
src/
├── assets/           # Static assets (images, styles)
├── components/       # Reusable UI components
├── layout/           # Application layout structure
├── mocks/            # Mocked data for development/testing
├── stores/           # Global state management (Pinia)
├── test/             # Unit tests (Vitest)
├── types/            # TypeScript type definitions
└── utils/            # Helper and utility functions
```
