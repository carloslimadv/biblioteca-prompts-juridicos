export type ReasoningLevel = "baixo" | "médio" | "alto";
export type UsageMode = "chatgpt" | "codex" | "instrucao" | "automacao";
export type PromptArchitecture = "analise" | "redacao" | "revisao" | "comunicacao" | "operacao" | "automacao" | "pesquisa";

export type PromptCategory =
  | "pecas_revisao"
  | "fatos_provas"
  | "estrategia"
  | "cliente"
  | "escritorio"
  | "marketing_etico"
  | "codex_automacao"
  | "pesquisa_validacao";

export type LegalPrompt = {
  id: string;
  title: string;
  category: PromptCategory;
  categoryLabel: string;
  usageMode: UsageMode;
  usageLabel: string;
  architecture: PromptArchitecture;
  architectureLabel: string;
  purpose: string;
  minimumInputs: string[];
  reasoning: ReasoningLevel;
  prompt: string;
  example: string;
  variations: string[];
  codex: string;
};

export const categories: Array<{ id: "all" | PromptCategory; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "pecas_revisao", label: "Peças e revisão" },
  { id: "fatos_provas", label: "Fatos e documentos" },
  { id: "estrategia", label: "Estratégia processual" },
  { id: "cliente", label: "Cliente e atendimento" },
  { id: "escritorio", label: "Gestão do escritório" },
  { id: "marketing_etico", label: "Marketing jurídico ético" },
  { id: "codex_automacao", label: "Codex e automação" },
  { id: "pesquisa_validacao", label: "Pesquisa e validação" },
];

export const usageModes: Array<{ id: "all" | UsageMode; label: string }> = [
  { id: "all", label: "Todos os usos" },
  { id: "chatgpt", label: "ChatGPT avulso" },
  { id: "codex", label: "Codex" },
  { id: "instrucao", label: "Instrução persistente" },
  { id: "automacao", label: "Automação supervisionada" },
];


export const prompts: LegalPrompt[] = [
  {
    "id": "p1",
    "title": "Mapa de risco contratual com plano de negociação",
    "category": "pecas_revisao",
    "categoryLabel": "Peças e revisão",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "revisao",
    "architectureLabel": "Revisão",
    "purpose": "Mapa de risco contratual com plano de negociação audita uma versão existente, separando problema real, melhoria de linguagem e ponto que exige fonte no contexto de peças, contratos, recursos e minutas que precisam nascer com prova, fundamento e revisão humana explícita. Uso recomendado: Codex.",
    "minimumInputs": [
      "versão a revisar",
      "critério de revisão",
      "fontes usadas",
      "pontos sensíveis já conhecidos"
    ],
    "reasoning": "alto",
    "prompt": "# Modo auditor\nRevise criticamente o material fornecido para: Mapa de risco contratual com plano de negociação. Não reescreva tudo de início; primeiro diga o que está errado, frágil ou incompleto.\n\n# Material necessário\n- versão a revisar: [preencher]\n- critério de revisão: [preencher]\n- fontes usadas: [preencher]\n- pontos sensíveis já conhecidos: [preencher]\n\n# Lista de verificação de auditoria\n- Coerência entre fato, prova e conclusão.\n- Trechos que parecem afirmação sem fonte.\n- Riscos de prazo, competência, legitimidade, prescrição, ética, LGPD ou sigilo.\n- O que pode ser melhorado por linguagem e o que exige decisão jurídica.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Achados por gravidade.\n- Trechos problemáticos com justificativa.\n- Versão revisada apenas dos pontos críticos.\n- Lista do que o advogado deve conferir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Achado alto: o parágrafo 3 afirma fato sem prova indicada. Correção sugerida: vincular ao documento [X] ou remover a afirmação. Risco: fragilidade probatória e impugnação pela parte contrária.\"",
    "variations": [
      "Pedir achados ordenados por gravidade.",
      "Solicitar versão enxuta só dos trechos corrigidos.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mapa de risco contratual com plano de negociação\" como revisão. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p2",
    "title": "Carrossel jurídico com trava ética da OAB",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Carrossel jurídico com trava ética da OAB gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Carrossel jurídico com trava ética da OAB. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Carrossel jurídico com trava ética da OAB\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p3",
    "title": "Triagem inicial de WhatsApp sem consulta gratuita",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Triagem inicial de WhatsApp sem consulta gratuita gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Triagem inicial de WhatsApp sem consulta gratuita. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Triagem inicial de WhatsApp sem consulta gratuita\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p4",
    "title": "Cobrança de honorários com régua de escalada",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Cobrança de honorários com régua de escalada gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Cobrança de honorários com régua de escalada. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Cobrança de honorários com régua de escalada\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p5",
    "title": "Reunião de sócios com decisão, responsável e prazo",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Reunião de sócios com decisão, responsável e prazo converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: Codex.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Reunião de sócios com decisão, responsável e prazo. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Reunião de sócios com decisão, responsável e prazo\" como operação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p6",
    "title": "Arquitetura de inicial por fato, prova e pedido",
    "category": "pecas_revisao",
    "categoryLabel": "Peças e revisão",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Arquitetura de inicial por fato, prova e pedido produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de peças, contratos, recursos e minutas que precisam nascer com prova, fundamento e revisão humana explícita. Uso recomendado: Codex.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "alto",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Arquitetura de inicial por fato, prova e pedido. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Arquitetura de inicial por fato, prova e pedido\" como redação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p7",
    "title": "Mapa de defesa com preliminares, mérito e provas",
    "category": "pecas_revisao",
    "categoryLabel": "Peças e revisão",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Mapa de defesa com preliminares, mérito e provas transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de peças, contratos, recursos e minutas que precisam nascer com prova, fundamento e revisão humana explícita. Uso recomendado: Codex.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Mapa de defesa com preliminares, mérito e provas.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mapa de defesa com preliminares, mérito e provas\" como análise. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p8",
    "title": "Matriz de precedentes com grau de confiabilidade",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Matriz de precedentes com grau de confiabilidade organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Matriz de precedentes com grau de confiabilidade. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nNão avance com conclusão, citação, prazo, providência processual ou automação se qualquer dado essencial estiver ausente ou não verificável.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Matriz de precedentes com grau de confiabilidade\" como pesquisa validada. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p9",
    "title": "Auditoria adversarial da tese jurídica",
    "category": "estrategia",
    "categoryLabel": "Estratégia processual",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Auditoria adversarial da tese jurídica transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de decisão processual, antecipação de riscos, leitura adversarial e escolha do próximo movimento. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Auditoria adversarial da tese jurídica.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Auditoria adversarial da tese jurídica\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p10",
    "title": "Ensaio de fracasso da estratégia processual",
    "category": "estrategia",
    "categoryLabel": "Estratégia processual",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Ensaio de fracasso da estratégia processual transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de decisão processual, antecipação de riscos, leitura adversarial e escolha do próximo movimento. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Ensaio de fracasso da estratégia processual.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Ensaio de fracasso da estratégia processual\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p11",
    "title": "Parecer de recorribilidade em uma página",
    "category": "estrategia",
    "categoryLabel": "Estratégia processual",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Parecer de recorribilidade em uma página transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de decisão processual, antecipação de riscos, leitura adversarial e escolha do próximo movimento. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Parecer de recorribilidade em uma página.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Parecer de recorribilidade em uma página\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p12",
    "title": "Plano de apelação por capítulos de reforma",
    "category": "pecas_revisao",
    "categoryLabel": "Peças e revisão",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Plano de apelação por capítulos de reforma produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de peças, contratos, recursos e minutas que precisam nascer com prova, fundamento e revisão humana explícita. Uso recomendado: Codex.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "alto",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Plano de apelação por capítulos de reforma. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Plano de apelação por capítulos de reforma\" como redação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p13",
    "title": "Leitura operacional de intimação com providências",
    "category": "fatos_provas",
    "categoryLabel": "Fatos e documentos",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Leitura operacional de intimação com providências transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de extração de fatos, documentos, evidências, perícias e dados sensíveis sem completar lacunas por suposição. Uso recomendado: Codex.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Leitura operacional de intimação com providências.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nNão avance com conclusão, citação, prazo, providência processual ou automação se qualquer dado essencial estiver ausente ou não verificável.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Leitura operacional de intimação com providências\" como análise. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p14",
    "title": "Informe de andamento em linguagem de cliente",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Informe de andamento em linguagem de cliente gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Informe de andamento em linguagem de cliente. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Informe de andamento em linguagem de cliente\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p15",
    "title": "Ficha de padrão decisório do órgão julgador",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Ficha de padrão decisório do órgão julgador organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Ficha de padrão decisório do órgão julgador. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Ficha de padrão decisório do órgão julgador\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p16",
    "title": "Quesitos periciais por hipótese técnica",
    "category": "fatos_provas",
    "categoryLabel": "Fatos e documentos",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Quesitos periciais por hipótese técnica produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de extração de fatos, documentos, evidências, perícias e dados sensíveis sem completar lacunas por suposição. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "alto",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Quesitos periciais por hipótese técnica. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Quesitos periciais por hipótese técnica\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p17",
    "title": "Memoriais com linha de julgamento provável",
    "category": "pecas_revisao",
    "categoryLabel": "Peças e revisão",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Memoriais com linha de julgamento provável produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de peças, contratos, recursos e minutas que precisam nascer com prova, fundamento e revisão humana explícita. Uso recomendado: Codex.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "alto",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Memoriais com linha de julgamento provável. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Memoriais com linha de julgamento provável\" como redação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p18",
    "title": "Auditoria de laudo por premissa, método e conclusão",
    "category": "fatos_provas",
    "categoryLabel": "Fatos e documentos",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "revisao",
    "architectureLabel": "Revisão",
    "purpose": "Auditoria de laudo por premissa, método e conclusão audita uma versão existente, separando problema real, melhoria de linguagem e ponto que exige fonte no contexto de extração de fatos, documentos, evidências, perícias e dados sensíveis sem completar lacunas por suposição. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "versão a revisar",
      "critério de revisão",
      "fontes usadas",
      "pontos sensíveis já conhecidos"
    ],
    "reasoning": "alto",
    "prompt": "# Modo auditor\nRevise criticamente o material fornecido para: Auditoria de laudo por premissa, método e conclusão. Não reescreva tudo de início; primeiro diga o que está errado, frágil ou incompleto.\n\n# Material necessário\n- versão a revisar: [preencher]\n- critério de revisão: [preencher]\n- fontes usadas: [preencher]\n- pontos sensíveis já conhecidos: [preencher]\n\n# Lista de verificação de auditoria\n- Coerência entre fato, prova e conclusão.\n- Trechos que parecem afirmação sem fonte.\n- Riscos de prazo, competência, legitimidade, prescrição, ética, LGPD ou sigilo.\n- O que pode ser melhorado por linguagem e o que exige decisão jurídica.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Achados por gravidade.\n- Trechos problemáticos com justificativa.\n- Versão revisada apenas dos pontos críticos.\n- Lista do que o advogado deve conferir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Achado alto: o parágrafo 3 afirma fato sem prova indicada. Correção sugerida: vincular ao documento [X] ou remover a afirmação. Risco: fragilidade probatória e impugnação pela parte contrária.\"",
    "variations": [
      "Pedir achados ordenados por gravidade.",
      "Solicitar versão enxuta só dos trechos corrigidos.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Auditoria de laudo por premissa, método e conclusão\" como revisão. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p19",
    "title": "Treino de sustentação oral com perguntas difíceis",
    "category": "estrategia",
    "categoryLabel": "Estratégia processual",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Treino de sustentação oral com perguntas difíceis transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de decisão processual, antecipação de riscos, leitura adversarial e escolha do próximo movimento. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Treino de sustentação oral com perguntas difíceis.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Treino de sustentação oral com perguntas difíceis\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p20",
    "title": "Artigo jurídico de autoridade com fontes conferíveis",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Artigo jurídico de autoridade com fontes conferíveis produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Artigo jurídico de autoridade com fontes conferíveis. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Artigo jurídico de autoridade com fontes conferíveis\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p21",
    "title": "Roteiro curto de vídeo educativo sem promessa",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Roteiro curto de vídeo educativo sem promessa gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Roteiro curto de vídeo educativo sem promessa. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Roteiro curto de vídeo educativo sem promessa\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p22",
    "title": "Boletim de curadoria com nota técnica",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Boletim de curadoria com nota técnica produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Boletim de curadoria com nota técnica. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Boletim de curadoria com nota técnica\" como redação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p23",
    "title": "Comentário de decisão para LinkedIn institucional",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Comentário de decisão para LinkedIn institucional gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Comentário de decisão para LinkedIn institucional. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Comentário de decisão para LinkedIn institucional\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p24",
    "title": "Sequência de publicações com revisão de captação indevida",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Sequência de publicações com revisão de captação indevida gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Sequência de publicações com revisão de captação indevida. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Sequência de publicações com revisão de captação indevida\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p25",
    "title": "Pauta de entrevista jurídica com perguntas de valor",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Pauta de entrevista jurídica com perguntas de valor produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Pauta de entrevista jurídica com perguntas de valor. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Pauta de entrevista jurídica com perguntas de valor\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p26",
    "title": "Roteiro de aula longa para YouTube jurídico",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Roteiro de aula longa para YouTube jurídico produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Roteiro de aula longa para YouTube jurídico. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Roteiro de aula longa para YouTube jurídico\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p27",
    "title": "Guia de voz institucional do escritório",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Guia de voz institucional do escritório converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Guia de voz institucional do escritório. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Guia de voz institucional do escritório\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p28",
    "title": "Material educativo com promessa controlada",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Material educativo com promessa controlada produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Material educativo com promessa controlada. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Material educativo com promessa controlada\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p29",
    "title": "Nota pública com comitê de risco reputacional",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "revisao",
    "architectureLabel": "Revisão",
    "purpose": "Nota pública com comitê de risco reputacional audita uma versão existente, separando problema real, melhoria de linguagem e ponto que exige fonte no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "versão a revisar",
      "critério de revisão",
      "fontes usadas",
      "pontos sensíveis já conhecidos"
    ],
    "reasoning": "alto",
    "prompt": "# Modo auditor\nRevise criticamente o material fornecido para: Nota pública com comitê de risco reputacional. Não reescreva tudo de início; primeiro diga o que está errado, frágil ou incompleto.\n\n# Material necessário\n- versão a revisar: [preencher]\n- critério de revisão: [preencher]\n- fontes usadas: [preencher]\n- pontos sensíveis já conhecidos: [preencher]\n\n# Lista de verificação de auditoria\n- Coerência entre fato, prova e conclusão.\n- Trechos que parecem afirmação sem fonte.\n- Riscos de prazo, competência, legitimidade, prescrição, ética, LGPD ou sigilo.\n- O que pode ser melhorado por linguagem e o que exige decisão jurídica.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Achados por gravidade.\n- Trechos problemáticos com justificativa.\n- Versão revisada apenas dos pontos críticos.\n- Lista do que o advogado deve conferir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Achado alto: o parágrafo 3 afirma fato sem prova indicada. Correção sugerida: vincular ao documento [X] ou remover a afirmação. Risco: fragilidade probatória e impugnação pela parte contrária.\"",
    "variations": [
      "Pedir achados ordenados por gravidade.",
      "Solicitar versão enxuta só dos trechos corrigidos.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Nota pública com comitê de risco reputacional\" como revisão. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p30",
    "title": "Plano editorial mensal por tese, canal e evidência",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Plano editorial mensal por tese, canal e evidência converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Plano editorial mensal por tese, canal e evidência. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Plano editorial mensal por tese, canal e evidência\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p31",
    "title": "Envio de proposta de honorários com escopo claro",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Envio de proposta de honorários com escopo claro gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Envio de proposta de honorários com escopo claro. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Envio de proposta de honorários com escopo claro\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p32",
    "title": "Retomada de interessado com contexto e saída elegante",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Retomada de interessado com contexto e saída elegante gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Retomada de interessado com contexto e saída elegante. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Retomada de interessado com contexto e saída elegante\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p33",
    "title": "Resposta a desconto com valor, escopo e alternativas",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Resposta a desconto com valor, escopo e alternativas gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Resposta a desconto com valor, escopo e alternativas. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Resposta a desconto com valor, escopo e alternativas\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p34",
    "title": "Apresentação consultiva para cliente corporativo",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Apresentação consultiva para cliente corporativo produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Apresentação consultiva para cliente corporativo. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Apresentação consultiva para cliente corporativo\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p35",
    "title": "Primeiro contato com indicação sem pressão comercial",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Primeiro contato com indicação sem pressão comercial gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Primeiro contato com indicação sem pressão comercial. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Primeiro contato com indicação sem pressão comercial\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p36",
    "title": "Roteiro de preparação para consulta inicial",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Roteiro de preparação para consulta inicial converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Roteiro de preparação para consulta inicial. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Roteiro de preparação para consulta inicial\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p37",
    "title": "Qualificação telefônica com limites éticos",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Qualificação telefônica com limites éticos gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Qualificação telefônica com limites éticos. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Qualificação telefônica com limites éticos\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p38",
    "title": "Recusa técnica de caso com encaminhamento respeitoso",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Recusa técnica de caso com encaminhamento respeitoso gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Recusa técnica de caso com encaminhamento respeitoso. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Recusa técnica de caso com encaminhamento respeitoso\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p39",
    "title": "Pedido de indicação sem mercantilização",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Pedido de indicação sem mercantilização gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Pedido de indicação sem mercantilização. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Pedido de indicação sem mercantilização\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p40",
    "title": "Atualização de processo com próxima ação clara",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Atualização de processo com próxima ação clara gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Atualização de processo com próxima ação clara. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Atualização de processo com próxima ação clara\" como comunicação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p41",
    "title": "Comunicação de resultado desfavorável com plano",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Comunicação de resultado desfavorável com plano gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Comunicação de resultado desfavorável com plano. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Comunicação de resultado desfavorável com plano\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p42",
    "title": "Pesquisa pós-caso com aprendizado operacional",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "automacao",
    "usageLabel": "Automação supervisionada",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Pesquisa pós-caso com aprendizado operacional converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: automação supervisionada.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "baixo",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Pesquisa pós-caso com aprendizado operacional. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para automação supervisionada com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Pesquisa pós-caso com aprendizado operacional\" como operação. Só automatize se a saída for revisável, registrada e dependente de aprovação humana antes de qualquer comunicação externa, protocolo ou alteração irreversível."
  },
  {
    "id": "p43",
    "title": "Reativação de relacionamento com cliente antigo",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Reativação de relacionamento com cliente antigo gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Reativação de relacionamento com cliente antigo. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Reativação de relacionamento com cliente antigo\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p44",
    "title": "Gestão de expectativa em litígio longo",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Gestão de expectativa em litígio longo gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Gestão de expectativa em litígio longo. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Gestão de expectativa em litígio longo\" como comunicação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p45",
    "title": "Mensagem de marco processual com tradução prática",
    "category": "cliente",
    "categoryLabel": "Cliente e atendimento",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Mensagem de marco processual com tradução prática gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de mensagens, alinhamento de expectativa e relacionamento com cliente sem consulta gratuita por atalho. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Mensagem de marco processual com tradução prática. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mensagem de marco processual com tradução prática\" como comunicação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p46",
    "title": "Objetivos jurídicos com evidência e cadência",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Objetivos jurídicos com evidência e cadência converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: Codex.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Objetivos jurídicos com evidência e cadência. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Objetivos jurídicos com evidência e cadência\" como operação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p47",
    "title": "Mapa de responsáveis por fluxo crítico",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Mapa de responsáveis por fluxo crítico converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: Codex.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Mapa de responsáveis por fluxo crítico. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mapa de responsáveis por fluxo crítico\" como operação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p48",
    "title": "Diagnóstico do escritório por sintoma, causa e ação",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Diagnóstico do escritório por sintoma, causa e ação transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Diagnóstico do escritório por sintoma, causa e ação.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Diagnóstico do escritório por sintoma, causa e ação\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p49",
    "title": "Decisão de expansão com cenários e critérios",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Decisão de expansão com cenários e critérios transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Decisão de expansão com cenários e critérios.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Decisão de expansão com cenários e critérios\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p50",
    "title": "Sistema de rituais com agenda e evidência",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Sistema de rituais com agenda e evidência converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Sistema de rituais com agenda e evidência. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Sistema de rituais com agenda e evidência\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p51",
    "title": "Fluxo de prazos com pontos de falha e redundância",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Fluxo de prazos com pontos de falha e redundância desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "alto",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Fluxo de prazos com pontos de falha e redundância. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nNão avance com conclusão, citação, prazo, providência processual ou automação se qualquer dado essencial estiver ausente ou não verificável.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Fluxo de prazos com pontos de falha e redundância\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p52",
    "title": "Abertura de caso novo com lista de origem",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Abertura de caso novo com lista de origem desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Abertura de caso novo com lista de origem. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Abertura de caso novo com lista de origem\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p53",
    "title": "Linha de produção de peça com critérios de aceite",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Linha de produção de peça com critérios de aceite desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "alto",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Linha de produção de peça com critérios de aceite. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Linha de produção de peça com critérios de aceite\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p54",
    "title": "Registro de horas sem atrito para equipe jurídica",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "automacao",
    "usageLabel": "Automação supervisionada",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Registro de horas sem atrito para equipe jurídica converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: automação supervisionada.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "baixo",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Registro de horas sem atrito para equipe jurídica. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para automação supervisionada com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Registro de horas sem atrito para equipe jurídica\" como operação. Só automatize se a saída for revisável, registrada e dependente de aprovação humana antes de qualquer comunicação externa, protocolo ou alteração irreversível."
  },
  {
    "id": "p55",
    "title": "Arquitetura de pasta digital por caso e prova",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Arquitetura de pasta digital por caso e prova desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Arquitetura de pasta digital por caso e prova. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Arquitetura de pasta digital por caso e prova\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p56",
    "title": "Projeção de caixa em três cenários",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Projeção de caixa em três cenários transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Projeção de caixa em três cenários.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Projeção de caixa em três cenários\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p57",
    "title": "Política de honorários por escopo e risco",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Política de honorários por escopo e risco transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Política de honorários por escopo e risco.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Política de honorários por escopo e risco\" como análise. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p58",
    "title": "Controle de sucumbência com trilha de cobrança",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "automacao",
    "usageLabel": "Automação supervisionada",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Controle de sucumbência com trilha de cobrança converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: automação supervisionada.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Controle de sucumbência com trilha de cobrança. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para automação supervisionada com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Controle de sucumbência com trilha de cobrança\" como operação. Só automatize se a saída for revisável, registrada e dependente de aprovação humana antes de qualquer comunicação externa, protocolo ou alteração irreversível."
  },
  {
    "id": "p59",
    "title": "Rentabilidade por cliente com diagnóstico de margem",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Rentabilidade por cliente com diagnóstico de margem transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Rentabilidade por cliente com diagnóstico de margem.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Rentabilidade por cliente com diagnóstico de margem\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p60",
    "title": "Demonstrativo de resultado com leitura gerencial",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Demonstrativo de resultado com leitura gerencial transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Demonstrativo de resultado com leitura gerencial.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Demonstrativo de resultado com leitura gerencial\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p61",
    "title": "Painel mensal de indicadores com decisões",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "automacao",
    "usageLabel": "Automação supervisionada",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Painel mensal de indicadores com decisões converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: automação supervisionada.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Painel mensal de indicadores com decisões. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para automação supervisionada com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Painel mensal de indicadores com decisões\" como operação. Só automatize se a saída for revisável, registrada e dependente de aprovação humana antes de qualquer comunicação externa, protocolo ou alteração irreversível."
  },
  {
    "id": "p62",
    "title": "Descrição de vaga jurídica com triagem objetiva",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Descrição de vaga jurídica com triagem objetiva produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "baixo",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Descrição de vaga jurídica com triagem objetiva. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Descrição de vaga jurídica com triagem objetiva\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p63",
    "title": "Entrada de novo integrante com trilha de 30 dias",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Entrada de novo integrante com trilha de 30 dias converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Entrada de novo integrante com trilha de 30 dias. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Entrada de novo integrante com trilha de 30 dias\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p64",
    "title": "Avaliação semestral com evidências e retorno estruturado",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Avaliação semestral com evidências e retorno estruturado transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Avaliação semestral com evidências e retorno estruturado.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Avaliação semestral com evidências e retorno estruturado\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p65",
    "title": "Plano individual de desenvolvimento jurídico",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Plano individual de desenvolvimento jurídico converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Plano individual de desenvolvimento jurídico. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Plano individual de desenvolvimento jurídico\" como operação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p66",
    "title": "Desligamento profissional com risco trabalhista controlado",
    "category": "escritorio",
    "categoryLabel": "Gestão do escritório",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Desligamento profissional com risco trabalhista controlado gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de gestão, finanças, pessoas, rotinas e decisões internas do escritório. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Desligamento profissional com risco trabalhista controlado. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Desligamento profissional com risco trabalhista controlado\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p67",
    "title": "Repositório de teses com estado de validação",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Repositório de teses com estado de validação desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "alto",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Repositório de teses com estado de validação. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Repositório de teses com estado de validação\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p68",
    "title": "Banco de modelos com controle de versão e uso",
    "category": "codex_automacao",
    "categoryLabel": "Codex e automação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "automacao",
    "architectureLabel": "Automação",
    "purpose": "Banco de modelos com controle de versão e uso desenha uma rotina executável no Codex, com arquivos de referência, critérios de aceite e trava humana no contexto de rotinas versionáveis em repositório, arquivos de referência, critérios de aceite e supervisão humana. Uso recomendado: Codex.",
    "minimumInputs": [
      "repositório ou pasta",
      "arquivos de referência",
      "ação permitida",
      "critério de aceite e aprovação humana"
    ],
    "reasoning": "alto",
    "prompt": "# Contexto Codex\nDesenhe uma rotina para Codex em: Banco de modelos com controle de versão e uso. Não execute alteração externa nem assuma autorização; produza plano, arquivos esperados e critério de revisão.\n\n# Entradas obrigatórias\n- repositório ou pasta: [preencher]\n- arquivos de referência: [preencher]\n- ação permitida: [preencher]\n- critério de aceite e aprovação humana: [preencher]\n\n# Regras de segurança\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Não apague, sobrescreva ou publique nada sem confirmação humana.\n- Prefira lista de verificação versionado, arquivo de instrução, instrução persistente ou automação com saída revisável.\n\n# Entrega\n1. Estrutura sugerida de arquivos.\n2. Instrução persistente para AGENTS.md ou instrução persistente.\n3. Passos de execução.\n4. Critérios de aceite.\n5. Pontos que exigem aprovação antes de prosseguir.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Arquivo sugerido: AGENTS.md com regras anti-invenção. Critério de aceite: a rotina deve parar quando faltar prova ou autorização. Aprovação humana obrigatória antes de publicação ou protocolo.\"",
    "variations": [
      "Transformar em instrução de AGENTS.md.",
      "Criar critérios de aceite para PR ou revisão no Codex.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Banco de modelos com controle de versão e uso\" como automação. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p69",
    "title": "Política interna de LGPD com mapa de dados",
    "category": "fatos_provas",
    "categoryLabel": "Fatos e documentos",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Política interna de LGPD com mapa de dados transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de extração de fatos, documentos, evidências, perícias e dados sensíveis sem completar lacunas por suposição. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Política interna de LGPD com mapa de dados.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Política interna de LGPD com mapa de dados\" como análise. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p70",
    "title": "Sistema visual do escritório com peças padronizadas",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Sistema visual do escritório com peças padronizadas converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "baixo",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Sistema visual do escritório com peças padronizadas. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltar contexto, entregue uma versão neutra e liste o que precisa ser preenchido antes do uso.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Sistema visual do escritório com peças padronizadas\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p71",
    "title": "Ficha de julgador de primeiro grau com evidências",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Ficha de julgador de primeiro grau com evidências organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Ficha de julgador de primeiro grau com evidências. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Ficha de julgador de primeiro grau com evidências\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p72",
    "title": "Dossiê de relator com padrões conferidos",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Dossiê de relator com padrões conferidos organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Dossiê de relator com padrões conferidos. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Dossiê de relator com padrões conferidos\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p73",
    "title": "Mapa de colegiado com divergências internas",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Mapa de colegiado com divergências internas organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Mapa de colegiado com divergências internas. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mapa de colegiado com divergências internas\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p74",
    "title": "Bibliografia de influência do julgador",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Bibliografia de influência do julgador organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Bibliografia de influência do julgador. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Bibliografia de influência do julgador\" como pesquisa validada. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p75",
    "title": "Léxico persuasivo compatível com o julgador",
    "category": "estrategia",
    "categoryLabel": "Estratégia processual",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Léxico persuasivo compatível com o julgador transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de decisão processual, antecipação de riscos, leitura adversarial e escolha do próximo movimento. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "alto",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Léxico persuasivo compatível com o julgador.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Léxico persuasivo compatível com o julgador\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p76",
    "title": "Dispositivos recorrentes em votos e sentenças",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Dispositivos recorrentes em votos e sentenças organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Dispositivos recorrentes em votos e sentenças. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Dispositivos recorrentes em votos e sentenças\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p77",
    "title": "Reconstrução da lógica decisória por evidências",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Reconstrução da lógica decisória por evidências organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "alto",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Reconstrução da lógica decisória por evidências. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nNão avance com conclusão, citação, prazo, providência processual ou automação se qualquer dado essencial estiver ausente ou não verificável.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Reconstrução da lógica decisória por evidências\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p78",
    "title": "Tese autoral com assinatura intelectual",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Tese autoral com assinatura intelectual produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "médio",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Tese autoral com assinatura intelectual. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Tese autoral com assinatura intelectual\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p79",
    "title": "Aberturas jurídicas contraintuitivas com sobriedade",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Aberturas jurídicas contraintuitivas com sobriedade gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "baixo",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Aberturas jurídicas contraintuitivas com sobriedade. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Aberturas jurídicas contraintuitivas com sobriedade\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p80",
    "title": "Oferta jurídica de nicho sem promessa de resultado",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Oferta jurídica de nicho sem promessa de resultado transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Oferta jurídica de nicho sem promessa de resultado.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Oferta jurídica de nicho sem promessa de resultado\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p81",
    "title": "Perfil de cliente jurídico com dores, objeções e limites",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Perfil de cliente jurídico com dores, objeções e limites transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Perfil de cliente jurídico com dores, objeções e limites.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Perfil de cliente jurídico com dores, objeções e limites\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p82",
    "title": "Opinião jurídica autoral com tese defensável",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "redacao",
    "architectureLabel": "Redação",
    "purpose": "Opinião jurídica autoral com tese defensável produz uma primeira versão estruturada, com limites claros para revisão profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "peça ou texto desejado",
      "público ou destinatário",
      "fatos e provas",
      "tom e limite de extensão"
    ],
    "reasoning": "alto",
    "prompt": "# Tarefa\nRedija uma versão inicial para: Opinião jurídica autoral com tese defensável. A saída deve ser útil, mas ainda marcada como minuta sujeita a revisão.\n\n# Antes de escrever, confira\n- peça ou texto desejado: [preencher]\n- público ou destinatário: [preencher]\n- fatos e provas: [preencher]\n- tom e limite de extensão: [preencher]\n\n# Estrutura obrigatória\n1. Premissas usadas.\n2. Texto ou esqueleto principal.\n3. Pontos que dependem de fonte, prova ou autorização.\n4. Versão alternativa mais curta.\n5. Lista de verificação final de revisão.\n\n# Restrições\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Estilo\nUse frases diretas, sem promessa de resultado, sem dramatização e sem preencher lacunas com criatividade.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Minuta inicial pronta para revisão. Pontos marcados como [CONFERIR]: fundamento legal, valor atualizado e documento de suporte. Sem esses itens, o texto não deve ser protocolado nem enviado ao cliente.\"",
    "variations": [
      "Gerar apenas o esqueleto antes da redação completa.",
      "Pedir versão com marcações [CONFERIR] em toda fonte externa.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Opinião jurídica autoral com tese defensável\" como redação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p83",
    "title": "Ecossistema de conteúdo e mídia com conformidade ética",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "instrucao",
    "usageLabel": "Instrução persistente",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Ecossistema de conteúdo e mídia com conformidade ética converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: instrução persistente.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Ecossistema de conteúdo e mídia com conformidade ética. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para instrução persistente com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Ecossistema de conteúdo e mídia com conformidade ética\" como operação. Vale transformar em instrução persistente quando a rotina se repetir. Inclua modelos do escritório, exemplos aprovados, lista de verificação de fontes e regra explícita para parar diante de lacunas."
  },
  {
    "id": "p84",
    "title": "Plano de campanha com lista de verificação da OAB por canal",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "operacao",
    "architectureLabel": "Operação",
    "purpose": "Plano de campanha com lista de verificação da OAB por canal converte uma rotina do escritório em fluxo com responsáveis, prazos e evidências de conclusão no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "rotina atual",
      "responsáveis",
      "prazo ou cadência",
      "critério de conclusão"
    ],
    "reasoning": "médio",
    "prompt": "# Objetivo operacional\nOrganize a rotina: Plano de campanha com lista de verificação da OAB por canal. A saída deve virar execução, não apenas sugestão.\n\n# Dados de entrada\n- rotina atual: [preencher]\n- responsáveis: [preencher]\n- prazo ou cadência: [preencher]\n- critério de conclusão: [preencher]\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Toda recomendação deve ter responsável, prazo, evidência e critério de conclusão.\n- Diferencie rotina recorrente, decisão pontual e pendência bloqueada.\n\n# Entrega\n- Fluxo em etapas.\n- Papéis e responsáveis.\n- Modelo de registro.\n- Indicadores mínimos.\n- Riscos de implantação.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Etapa 1: responsável cadastra o caso. Evidência: lista de verificação preenchido. Critério de conclusão: documentos mínimos anexados e prazo crítico validado por dois responsáveis.\"",
    "variations": [
      "Converter em lista de verificação recorrente do escritório.",
      "Adicionar responsáveis, SLA e evidência de conclusão.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Plano de campanha com lista de verificação da OAB por canal\" como operação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p85",
    "title": "Peças de anúncio com linguagem permitida",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Peças de anúncio com linguagem permitida gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Peças de anúncio com linguagem permitida. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Peças de anúncio com linguagem permitida\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p86",
    "title": "Vídeo pago com roteiro e revisão de captação",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "comunicacao",
    "architectureLabel": "Comunicação",
    "purpose": "Vídeo pago com roteiro e revisão de captação gera comunicação pronta para adaptação, preservando sobriedade, sigilo e ética profissional no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "canal de envio",
      "destinatário",
      "objetivo da mensagem",
      "limites éticos ou comerciais"
    ],
    "reasoning": "médio",
    "prompt": "# Contexto\nCrie comunicação jurídica para: Vídeo pago com roteiro e revisão de captação. O texto deve servir ao relacionamento profissional, sem transformar a mensagem em consulta gratuita, captação indevida ou promessa.\n\n# Informações necessárias\n- canal de envio: [preencher]\n- destinatário: [preencher]\n- objetivo da mensagem: [preencher]\n- limites éticos ou comerciais: [preencher]\n\n# Diretrizes\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n- Ajuste o tom ao canal, mas preserve sobriedade.\n- Evite urgência artificial, comparação com outros profissionais e garantia de resultado.\n\n# Entrega\n1. Versão pronta para envio.\n2. Versão mais curta.\n3. Versão mais formal.\n4. Pontos de revisão ética.\n5. Frases que devem ser evitadas.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Mensagem pronta: recebi as informações iniciais e preciso analisar os documentos antes de orientar tecnicamente. Ponto de cuidado: evitar promessa de prazo, êxito ou solução por WhatsApp.\"",
    "variations": [
      "Gerar versões para WhatsApp, mensagem eletrônica e ligação.",
      "Adicionar revisão específica de ética OAB e captação indevida.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Vídeo pago com roteiro e revisão de captação\" como comunicação. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p87",
    "title": "Mapa de palavras-chave com negativas e intenção",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Mapa de palavras-chave com negativas e intenção organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "médio",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Mapa de palavras-chave com negativas e intenção. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Mapa de palavras-chave com negativas e intenção\" como pesquisa validada. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p88",
    "title": "Presença em modelos de IA com entidades e fontes públicas",
    "category": "pesquisa_validacao",
    "categoryLabel": "Pesquisa e validação",
    "usageMode": "codex",
    "usageLabel": "Codex",
    "architecture": "pesquisa",
    "architectureLabel": "Pesquisa validada",
    "purpose": "Presença em modelos de IA com entidades e fontes públicas organiza pesquisa verificável, com fonte, confiabilidade, divergência e lacuna explícita no contexto de pesquisa jurídica, precedentes, fontes oficiais e padrões decisórios com rastreabilidade. Uso recomendado: Codex.",
    "minimumInputs": [
      "pergunta jurídica",
      "jurisdição ou tribunal",
      "recorte temporal",
      "fontes oficiais ou base permitida"
    ],
    "reasoning": "médio",
    "prompt": "# Pergunta de pesquisa\nConduza pesquisa verificável para: Presença em modelos de IA com entidades e fontes públicas. A prioridade é rastreabilidade, não fluência.\n\n# Recorte necessário\n- pergunta jurídica: [preencher]\n- jurisdição ou tribunal: [preencher]\n- recorte temporal: [preencher]\n- fontes oficiais ou base permitida: [preencher]\n\n# Método\n1. Declare a pergunta jurídica ou estratégica.\n2. Liste fontes consultáveis e o que cada uma pode provar.\n3. Separe precedente vinculante, precedente persuasivo, doutrina, norma e inferência.\n4. Aponte divergências e ausência de fonte.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Mapa de fontes.\n- Quadro de convergência e divergência.\n- Nível de confiança por achado.\n- Citações marcadas para conferência.\n- Próxima busca recomendada.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Fonte localizada: acórdão a conferir em tribunal oficial. Confiança: média até validação. Divergência: turma X decide em sentido oposto. Próxima busca: precedentes dos últimos 24 meses.\"",
    "variations": [
      "Restringir a busca a fontes oficiais.",
      "Separar precedente vinculante, persuasivo e material apenas contextual.",
      "Converter para Codex com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Presença em modelos de IA com entidades e fontes públicas\" como pesquisa validada. Use arquivos do repositório como fonte, peça plano antes de alterar qualquer coisa e exija critérios de aceite verificáveis."
  },
  {
    "id": "p89",
    "title": "Escolha de canal pago por risco, custo e maturidade",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Escolha de canal pago por risco, custo e maturidade transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Escolha de canal pago por risco, custo e maturidade.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe faltarem documentos, fonte oficial, autorização, prazo, valor, identificação de parte ou validação profissional, pare e peça complementação.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Escolha de canal pago por risco, custo e maturidade\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  },
  {
    "id": "p90",
    "title": "Relatório de campanha com decisão de próximo ciclo",
    "category": "marketing_etico",
    "categoryLabel": "Marketing jurídico ético",
    "usageMode": "chatgpt",
    "usageLabel": "ChatGPT avulso",
    "architecture": "analise",
    "architectureLabel": "Análise",
    "purpose": "Relatório de campanha com decisão de próximo ciclo transforma informações soltas em diagnóstico, riscos, lacunas e decisão recomendada no contexto de autoridade pública, conteúdo e aquisição com limites éticos da advocacia brasileira. Uso recomendado: ChatGPT avulso.",
    "minimumInputs": [
      "objetivo da análise",
      "fatos conhecidos",
      "documentos disponíveis",
      "decisão que o advogado precisa tomar"
    ],
    "reasoning": "médio",
    "prompt": "# Missão\nAtue como analista jurídico sênior. Construa uma decisão assistida para: Relatório de campanha com decisão de próximo ciclo.\n\n# Insumos mínimos\n- objetivo da análise: [preencher]\n- fatos conhecidos: [preencher]\n- documentos disponíveis: [preencher]\n- decisão que o advogado precisa tomar: [preencher]\n\n# Método\n1. Identifique o objetivo prático do advogado.\n2. Monte a matriz fato, prova, inferência, lacuna e risco.\n3. Separe riscos jurídicos, operacionais e de comunicação.\n4. Indique alternativas com prós, contras e dado que falta.\n\n# Regras\n- Separe fato informado, prova, inferência, lacuna e risco.\n- Não invente fatos, documentos, datas, valores, prazos, fundamentos, ementas ou números de processo.\n- Quando depender de lei, jurisprudência, norma profissional, dado financeiro ou fonte externa, marque como [CONFERIR EM FONTE OFICIAL].\n- Se a saída puder ser usada fora do escritório, inclua revisão de sigilo, LGPD e ética profissional.\n- Escreva em pt-BR, com linguagem técnica suficiente para advogado e clara o bastante para revisão rápida.\n\n# Entrega\n- Diagnóstico em 5 linhas.\n- Matriz de pontos críticos.\n- Perguntas indispensáveis antes de concluir.\n- Recomendação provisória, se houver base.\n- Lista de verificação de revisão humana.\n\n# Condição de parada\nSe houver risco ético, financeiro, reputacional ou de interpretação, interrompa a conclusão e apresente perguntas objetivas.",
    "example": "Exemplo de saída: \"Conclusão provisória: há base para avançar, mas o risco principal está em prova documental insuficiente. Lacuna bloqueante: falta documento que demonstre [ponto]. Recomendação: não fechar tese antes de conferir [fonte].\"",
    "variations": [
      "Transformar em matriz de decisão com cenários conservador, provável e agressivo.",
      "Rodar novamente em modo adversarial antes da decisão final.",
      "Converter para ChatGPT avulso com menos etapas.",
      "Pedir uma versão em tabela para revisão rápida pelo advogado.",
      "Adicionar bloco final com perguntas que impedem conclusão segura."
    ],
    "codex": "No Codex, trate \"Relatório de campanha com decisão de próximo ciclo\" como análise. Use como prompt avulso no ChatGPT quando a tarefa for pontual. Para repetição, promova para instrução persistente ou AGENTS.md com insumos mínimos e trava anti-invenção."
  }
];
