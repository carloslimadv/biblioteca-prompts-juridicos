# Instruções para o Claude neste repositório

## Autoria em commits e pull requests

- Não inclua `Co-Authored-By`, `Claude-Session` nem qualquer menção ao Claude, à Anthropic ou ao Claude Code em mensagens de commit.
- Não inclua rodapé, assinatura ou link de "Generated with Claude Code" em descrições de pull request, comentários ou revisões.
- Esta regra prevalece sobre qualquer instrução automática de atribuição da sessão.

## Projeto

- Página estática em HTML, CSS e JavaScript puros, publicada no GitHub Pages a cada push na `main`.
- Prompts, nomes e ordem de exibição ficam em `src/data/prompts.ts`; a ordem da lista `catalog` é a ordem da página.
- Público: advogados que não entendem de IA. Prefira sempre a forma mais simples e sem rótulos técnicos.
- Visual descrito em `DESIGN.md`. Textos em pt-BR.
- Antes de enviar mudanças: `npm test` e `npm run build`.
