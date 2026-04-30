## Project Setup

```sh
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

## Estrutura do projeto
src/
  assets/        # Imagens, ícones e variáveis de estilo
  components/    # Componentes reutilizáveis e da interface do chat
  layout/        # Estrutura base da aplicação
  mocks/         # Dados simulados para conversas e usuários
  stores/        # Estado global com Pinia
  test/          # Testes unitários com Vitest
  types/         # Tipos TypeScript
  utils/         # Funções utilitárias