# Design System

## Direção

Página pública, clara e direta, para advogados que não entendem de IA. Segue o design system "Henrique Santana Advogados": base neutra clara, tipografia forte e um único destaque amarelo por seção. Simplicidade vem antes de tudo: o que não ajuda a escolher e copiar um prompt sai da página.

## Cena

Um advogado abre a página no intervalo entre dois atendimentos, acha o prompt pelo nome da tarefa ("Petição inicial", "Leitura de intimação"), copia e cola no Claude.

## Paleta

Superfície `off` (#fafaf7), seção da biblioteca em `branco`, seção de cuidados em `off-profundo`, rodapé em `noite`. Texto em `tinta` e `grafite`. Amarelo (#fae100) só em um gesto por seção: o destaque da frase de abertura e o filtro selecionado. Sobre amarelo, só `tinta`. Sem modo escuro.

## Tipografia

Archivo para títulos (peso 750 a 850, largura 105% a 115%) e Hanken Grotesk para o texto. Linha de leitura de 65 a 75 caracteres.

## Componentes

Lista de prompts agrupada por tema, na ordem de uso no dia a dia (petições primeiro). Cada item mostra nome, uma frase do que faz, o que ter em mãos e o botão "Copiar prompt"; o texto completo fica atrás de "Ver o texto do prompt". Botões em pílula, sem sombra em cards, separação por linha e espaço. Não exibir complexidade, arquitetura ou outros rótulos técnicos.

## Não fazer

Imagens ilustrativas, símbolos genéricos de advocacia (§, balança, martelo), numeração decorativa, gradientes e mais de um destaque amarelo por seção.

## Movimento

Microinterações discretas: hover, foco, expansão e confirmação de cópia. Respeitar `prefers-reduced-motion`.
