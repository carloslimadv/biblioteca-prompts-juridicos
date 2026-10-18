# Prompts jurídicos para Claude

[![HTML5](https://img.shields.io/badge/HTML5-CSS3--JS-1b1b1b?style=flat-square)](#)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-123c31?style=flat-square)](https://carloslimadv.github.io/biblioteca-prompts-juridicos/)
[![pt-BR](https://img.shields.io/badge/idioma-pt--BR-9a5a2e?style=flat-square)](#)


Biblioteca gratuita com 49 prompts jurídicos em português, prontos para copiar e colar no Claude. Feita para advogados que não entendem de IA: escolha a tarefa, copie, preencha os campos entre colchetes e revise o resultado.

**Acesse:** [carloslimadv.github.io/biblioteca-prompts-juridicos](https://carloslimadv.github.io/biblioteca-prompts-juridicos/)

<a href="https://www.buymeacoffee.com/carloslimadv" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Compre-me um café" width="210" />
</a>

## Como os prompts estão organizados

Os prompts aparecem por tema, na ordem de uso no dia a dia do escritório, e cada tema abre pelo prompt mais usado:

1. Petições e recursos (começa pela petição inicial)
2. Prazos e intimações
3. Caso novo e documentos
4. Estratégia
5. Pesquisa
6. Atendimento ao cliente
7. Gestão do escritório
8. Conteúdo e marketing

Cada item mostra o nome da tarefa, uma frase do que ele faz, o que ter em mãos e o botão "Copiar prompt". A ordem e os nomes ficam no catálogo de `src/data/prompts.ts`.

## Como os prompts foram escritos

O texto comum dos prompts foi revisto em 18 de outubro de 2026 para Claude (conversa, Projetos, Cowork e Claude Code), com base nas [boas práticas oficiais da Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) e no [guia do Claude Opus 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5). A versão anterior, de 14 de julho de 2026, seguia o guia do GPT-5.6.

- O material do caso vem primeiro e as instruções depois, cada parte em sua tag (`<material>`, `<objetivo>`, `<entrega>`…).
- O prompt explica por que pede rigor: o resultado será assinado pelo advogado.
- O Claude localiza o trecho do documento antes de analisar, cita só fontes que acessou e marca o resto como [CONFERIR EM FONTE OFICIAL].
- Conteúdo de documentos é tratado como dado, nunca como instrução.
- A resposta termina com a lista do que não pôde ser verificado.
- No Cowork e no Claude Code, o Claude pede confirmação antes de mover, apagar, enviar ou protocolar.

## Desenvolvimento

```bash
npm ci
npm run build   # gera dist/
npm test
npm run dev     # build e servidor local
```

A página é HTML, CSS e JavaScript puros, publicada no GitHub Pages a cada push na `main`. O visual segue `DESIGN.md`.

## O que este projeto não é

Não é consultoria jurídica automatizada, não gera peça para protocolo sem revisão e não promete resultado. Antes de usar qualquer resposta, o advogado confere fatos, documentos, fundamentos, prazos, valores, jurisprudência, sigilo, LGPD e regras de publicidade profissional.

## Aviso jurídico

Os prompts são material de apoio. Não substituem análise jurídica, revisão humana, consulta a fontes oficiais nem a responsabilidade profissional do advogado.
