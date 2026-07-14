# Manual de prompts jurídicos para IA

[![Astro](https://img.shields.io/badge/Astro-6-1b1b1b?style=flat-square)](https://astro.build/)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-123c31?style=flat-square)](https://carloslimadv.github.io/biblioteca-prompts-juridicos/)
[![pt-BR](https://img.shields.io/badge/idioma-pt--BR-9a5a2e?style=flat-square)](#)


Página pública para apresentar, explicar e disponibilizar uma biblioteca curada de 41 prompts jurídicos em português do Brasil, pensada para advogados que usam modelos de IA com responsabilidade profissional.

**Acesse:** [carloslimadv.github.io/biblioteca-prompts-juridicos](https://carloslimadv.github.io/biblioteca-prompts-juridicos/)

<a href="https://www.buymeacoffee.com/carloslimadv" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Compre-me um café" width="210" />
</a>

## Revisão metodológica para GPT-5.6

O contrato comum dos 41 prompts foi revisto em 14 de julho de 2026 com base no [guia oficial de prompts do GPT-5.6](https://developers.openai.com/api/docs/guides/prompt-guidance-gpt-5p6) e no [guia do modelo atual](https://developers.openai.com/api/docs/guides/latest-model).

A revisão mantém a biblioteca independente de fornecedor e concentra as mudanças no que afeta o comportamento:

- resultado e critérios de conclusão explícitos;
- evidências vinculadas às afirmações, com conflitos e lacunas identificados;
- limites de autonomia proporcionais ao tipo de tarefa;
- formato de saída verificável;
- regra de parada que pede somente o dado necessário e continua nas partes independentes;
- validação final antes de considerar a entrega concluída.

As marcações de complexidade baixa, média ou alta são editoriais. Elas não equivalem diretamente ao parâmetro `reasoning.effort` da API. Em uma migração, preserve primeiro o esforço já usado e compare o mesmo nível com um abaixo em casos representativos.

## Para que serve

A página organiza prompts jurídicos prontos para copiar, adaptar e validar em tarefas reais de escritório. Ela não promete substituir o trabalho do advogado. A proposta é reduzir retrabalho, melhorar a formulação de pedidos para IA e deixar claro onde a revisão humana é obrigatória.

Na prática, a página ajuda o usuário a:

- encontrar prompts por área do escritório;
- entender quando usar um prompt avulso e quando transformar uma rotina em instrução persistente, orientação interna ou fluxo supervisionado;
- copiar prompts estruturados com objetivo, contexto, critérios de sucesso, restrições e regras de parada;
- lembrar que fatos, documentos, leis, jurisprudência, valores e prazos precisam ser conferidos antes de uso profissional;
- separar fato, prova, inferência, lacuna e risco antes de protocolar, enviar ou publicar qualquer resultado.

## O que a página entrega

| Área | Função na página |
| --- | --- |
| Abertura editorial | Apresenta o manual com posicionamento jurídico, técnico e responsável. |
| Biblioteca | Lista os 41 prompts curados em itens expansíveis, com busca, filtros e botão de cópia. |
| Temas | Agrupa prompts por peças e revisão, fatos e documentos, estratégia processual, cliente e atendimento, gestão do escritório, marketing jurídico ético, automação e rotinas, pesquisa e validação. |
| Complexidade editorial | Indica se a tarefa tem complexidade baixa, média ou alta; não é um valor literal de `reasoning.effort`. |
| Guia de uso | Explica a diferença entre uso avulso, rotina permanente e automação supervisionada. |
| Boas práticas | Resume a estrutura recomendada para prompts jurídicos verificáveis. |
| Limites | Reforça revisão humana, sigilo, LGPD, ética da OAB e checagem de fontes oficiais. |

## Para quem foi feita

Esta página foi desenhada para:

- advogados brasileiros que querem usar IA sem abrir mão de controle técnico;
- sócios e coordenadores que precisam padronizar rotinas de escritório;
- equipes que usam IA para transformar tarefas recorrentes em instruções persistentes;
- profissionais de marketing jurídico que precisam manter comunicação sóbria e compatível com a ética profissional;
- estudantes e pesquisadores que querem aprender a estruturar prompts jurídicos com mais rigor.

## Princípios editoriais

Os prompts seguem uma lógica simples: uma boa resposta começa com uma boa instrução. Por isso, cada prompt prioriza:

- objetivo claro;
- material mínimo necessário;
- restrições e evidências explícitas;
- formato de saída previsível;
- critérios de sucesso;
- limites de autonomia e regras de parada;
- indicação do que precisa ser conferido por fonte oficial;
- separação entre dado informado, inferência, lacuna e risco.

## O que este projeto não é

Este projeto não é uma consultoria jurídica automatizada, não é um gerador de peças para protocolo sem revisão e não é uma promessa de resultado com IA. A biblioteca é um material de apoio para formular melhor o trabalho com modelos de linguagem.

Antes de usar qualquer saída gerada a partir dos prompts, o advogado deve revisar fatos, documentos, fundamentos, prazos, valores, jurisprudência, estratégia, sigilo, LGPD e regras de publicidade profissional.

## Experiência da página

A interface foi construída para exploração rápida:

- busca por palavra-chave;
- filtros por categoria;
- itens expansíveis para manter a página fácil de percorrer;
- carregamento sob demanda do prompt completo;
- cópia rápida do texto;
- navegação por seções;
- botão de apoio via Buy Me a Coffee;
- desenho responsivo para consulta em computador e celular;
- visual editorial, jurídico e tecnológico, sem estética genérica de ferramenta de IA.

## Aviso jurídico

Os prompts desta biblioteca são material de apoio. Eles não substituem análise jurídica, revisão humana, conferência de documentos, consulta a fontes oficiais nem responsabilidade profissional do advogado.

Não use qualquer saída em peça, contrato, parecer, comunicação com cliente, campanha, publicação ou decisão estratégica sem revisão técnica adequada.
