# Manual de Prompts Jurídicos para ChatGPT e Codex

Biblioteca pública com 90 prompts jurídicos em pt-BR, adaptados para uso no ChatGPT e no Codex com GPT-5.5. O projeto organiza prompts por categoria, com busca, filtros, cards expansíveis, cópia rápida, reasoning recomendado e orientação para transformar tarefas recorrentes em rotinas supervisionadas no Codex.

## Stack

- Astro 6
- TypeScript
- CSS puro com variáveis de design em OKLCH
- Deploy estático via GitHub Pages

## Estrutura

```text
src/
  data/prompts.ts       Conteúdo estruturado dos 90 prompts
  pages/index.astro     Landing page e biblioteca
  styles/global.css     Sistema visual e responsividade
public/.nojekyll        Compatibilidade com GitHub Pages
.github/workflows/      Deploy automático
```

## Desenvolvimento local

```sh
npm install
npm run dev
```

Build de produção:

```sh
npm run build
```

Preview local:

```sh
npm run preview
```

## Deploy

O projeto está configurado para GitHub Pages em:

```text
https://carloslimadv.github.io/biblioteca-prompts-juridicos/
```

A configuração está em `astro.config.mjs`:

```js
site: 'https://carloslimadv.github.io',
base: '/biblioteca-prompts-juridicos'
```

O workflow `.github/workflows/deploy.yml` publica o conteúdo de `dist` quando houver push na branch `main`.

## Roadmap

- Adicionar página individual por prompt com URL compartilhável.
- Incluir exportação da biblioteca em JSON e Markdown.
- Criar pacotes de prompts por área de atuação.
- Adicionar exemplos reais revisados para cada categoria.
- Criar templates de `AGENTS.md` e skills do Codex por rotina jurídica.

## Licença sugerida

- Código: MIT.
- Conteúdo editorial e prompts: CC BY-NC-SA 4.0, salvo ajuste posterior do autor.

## Aviso jurídico

Os prompts não substituem revisão profissional. Antes de usar qualquer saída em peça, contrato, comunicação com cliente, campanha, parecer ou ato processual, confira fatos, documentos, legislação, jurisprudência, prazos, valores, ética profissional, LGPD e sigilo.
