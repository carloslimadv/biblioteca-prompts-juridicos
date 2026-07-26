import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Import data from TypeScript source
import { categories, promptMethod, prompts } from './src/data/prompts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 1. Generate prompts.json
const promptsJsonData = prompts.map((prompt) => ({
  id: prompt.id,
  prompt: prompt.prompt,
}));

fs.writeFileSync(
  path.join(__dirname, 'prompts.json'),
  JSON.stringify(promptsJsonData, null, 2),
  'utf-8'
);
console.log('Generated prompts.json');

// 2. Compute category counts and order prompts
const countBy = (field) =>
  prompts.reduce((acc, prompt) => {
    acc[prompt[field]] = (acc[prompt[field]] ?? 0) + 1;
    return acc;
  }, {});

const categoryCounts = countBy('category');
const categoryOrder = new Map(categories.map((category, index) => [category.id, index]));
const displayPrompts = prompts
  .map((p) => ({
    p,
    cat: categoryOrder.get(p.category) ?? 999,
    numId: p.id === 'p0' ? -1 : parseInt(p.id.substring(1), 10),
  }))
  .sort((a, b) => {
    if (a.numId === -1) return -1;
    if (b.numId === -1) return 1;
    const categoryDelta = a.cat - b.cat;
    if (categoryDelta !== 0) return categoryDelta;
    return a.numId - b.numId;
  })
  .map((x) => x.p);

const totalPrompts = prompts.length;
const canonicalUrl = 'https://carloslimadv.github.io/biblioteca-prompts-juridicos/';
const instagramUrl = 'https://www.instagram.com/henriquesantana.adv/';
const repositoryUrl = 'https://github.com/carloslimadv/biblioteca-prompts-juridicos';
const fontStylesheet =
  'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500..800&family=Outfit:wght@400;500;600;700;800&display=swap';

const filterChipsHtml = categories
  .map(
    (category) => `
              <button
                class="filter-chip"
                type="button"
                data-category-filter="${category.id}"
                aria-pressed="${category.id === 'all' ? 'true' : 'false'}"
              >
                <span>${escapeHtml(category.label)}</span>
                <small>${category.id === 'all' ? totalPrompts : categoryCounts[category.id] ?? 0}</small>
              </button>`
  )
  .join('');

const promptCardsHtml = displayPrompts
  .map((prompt, index) => {
    const searchAttr = `${prompt.title} ${prompt.categoryLabel} ${prompt.architectureLabel} ${prompt.purpose} ${prompt.minimumInputs.join(' ')} ${prompt.example} ${prompt.variations.join(' ')}`;
    const minimumInputsList = prompt.minimumInputs.map((input) => `<li>${escapeHtml(input)}</li>`).join('\n                          ');
    const variationsList = prompt.variations.map((variation) => `<li>${escapeHtml(variation)}</li>`).join('\n                          ');

    return `
              <article
                id="${prompt.id}"
                class="prompt-card"
                data-prompt-id="${prompt.id}"
                data-category="${prompt.category}"
                data-search="${escapeHtml(searchAttr)}"
              >
                <details>
                  <summary>
                    <span class="prompt-index">${String(index + 1).padStart(2, '0')}</span>
                    <span class="summary-copy">
                      <span class="card-meta">
                        <span>${escapeHtml(prompt.categoryLabel)}</span>
                        <span class="reasoning reasoning-${prompt.reasoning}" title="Classificação editorial da complexidade da tarefa">complexidade: ${escapeHtml(prompt.reasoning)}</span>
                      </span>
                      <strong>${escapeHtml(prompt.title)}</strong>
                      <em>${escapeHtml(prompt.purpose)}</em>
                    </span>
                  </summary>
                  <div class="card-content">
                    <div class="prompt-actions">
                      <span>Prompt completo</span>
                      <div class="prompt-action-buttons">
                        <button class="copy-button" type="button" data-copy-prompt data-prompt-id="${prompt.id}">Copiar prompt</button>
                        <button class="copy-button secondary-copy" type="button" data-copy-link data-prompt-id="${prompt.id}">Copiar link</button>
                      </div>
                    </div>
                    <pre id="prompt-text-${prompt.id}" data-loaded="false">Abra o item para carregar o prompt completo.</pre>

                    <div class="detail-columns">
                      <section>
                        <h3>Insumos mínimos</h3>
                        <ul>
                          ${minimumInputsList}
                        </ul>
                      </section>
                      <section>
                        <h3>Exemplo de saída</h3>
                        <p>${escapeHtml(prompt.example)}</p>
                      </section>
                    </div>

                    <div class="detail-columns">
                      <section>
                        <h3>Variações úteis</h3>
                        <ul>
                          ${variationsList}
                        </ul>
                      </section>
                      <section>
                        <h3>Arquitetura</h3>
                        <p>${escapeHtml(prompt.architectureLabel)}. Use como ponto de partida e adapte ao contexto, aos documentos e ao nível de revisão necessário.</p>
                      </section>
                    </div>
                  </div>
                </details>
              </article>`;
  })
  .join('\n');

const htmlContent = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta
      name="description"
      content="Biblioteca pública com 41 prompts jurídicos verificáveis em pt-BR, com evidências, limites e revisão humana para a advocacia brasileira."
    />
    <meta property="og:title" content="Manual de prompts jurídicos para IA" />
    <meta property="og:description" content="41 prompts jurídicos curados com evidências, limites, regras de parada e revisão humana." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#123c31" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="${fontStylesheet}" />
    <link rel="stylesheet" href="${fontStylesheet}" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="${fontStylesheet}" /></noscript>
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="styles/global.css" />
    <title>Manual de prompts jurídicos para IA</title>
  </head>
  <body>
    <a class="skip-link" href="#biblioteca">Ir para a biblioteca</a>

    <!-- N6 Newspaper Masthead -->
    <header class="site-header" aria-label="Cabeçalho principal">
      <div class="masthead-top">
        <a class="brand" href="#topo" aria-label="Manual de prompts jurídicos">
          <span class="brand-mark" aria-hidden="true">§</span>
          <span class="brand-title">Manual de prompts jurídicos</span>
        </a>
        <div class="masthead-meta">
          <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.buymeacoffee.com/carloslimadv" target="_blank" rel="noopener noreferrer">Apoiar projeto</a>
        </div>
      </div>
      <nav class="nav" aria-label="Navegação principal">
        <a href="#biblioteca">Biblioteca</a>
        <a href="#metodo">Método</a>
        <a href="#guia">Guia</a>
        <a href="#boas-praticas">Boas práticas</a>
        <a href="#limites">Limites</a>
      </nav>
    </header>

    <main id="topo" data-prompts-url="prompts.json">
      <section class="hero section-band" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Prompts verificáveis para advocacia brasileira</p>
          <h1 id="hero-title">Manual de prompts jurídicos para IA</h1>
          <p class="hero-lead">
            Uma biblioteca pública com 41 prompts jurídicos curados para produzir trabalho útil, verificável e pronto para revisão humana.
          </p>
          <div class="hero-actions" aria-label="Ações principais">
            <a class="button primary" href="#biblioteca">Explorar biblioteca</a>
            <a class="button secondary" href="#guia">Ver guia de uso</a>
          </div>
        </div>

        <!-- Pure Specimen Card (No Stock Photo) -->
        <aside class="hero-visual" aria-label="Exemplo de prompt estruturado">
          <div class="visual-badge">
            <span>Contrato de prompt</span>
            <span class="reasoning reasoning-alto">complexidade alta</span>
          </div>
          <div class="visual-specimen-box">
            <div class="specimen-line">
              <span class="specimen-num">01</span>
              <div>
                <strong>Objetivo & Resultado</strong>
                <p>Transformar a tarefa jurídica em entrega clara, revisável e diretamente aproveitável.</p>
              </div>
            </div>
            <div class="specimen-line">
              <span class="specimen-num">02</span>
              <div>
                <strong>Evidência Rastreável</strong>
                <p>Vincular fonte ao ponto sustentado e declarar fatos, inferências, lacunas e riscos.</p>
              </div>
            </div>
            <div class="specimen-line">
              <span class="specimen-num">03</span>
              <div>
                <strong>Regra de Parada</strong>
                <p>Solicitar o menor dado faltante e prosseguir em todas as etapas independentes.</p>
              </div>
            </div>
          </div>
          <div class="visual-grid" aria-hidden="true">
            <span>peças</span>
            <span>provas</span>
            <span>contratos</span>
            <span>gestão</span>
          </div>
        </aside>
      </section>

      <section class="intro section-narrow" aria-labelledby="intro-title">
        <div>
          <h2 id="intro-title">Prompts melhores reduzem retrabalho, mas não substituem advocacia.</h2>
        </div>
        <p>
          A biblioteca foi desenhada para tarefas reais de escritório: contratos, peças, jurisprudência, atendimento, gestão, marketing jurídico, controladoria e tráfego. Cada prompt força contexto, critérios de sucesso, limites e revisão antes do uso profissional.
        </p>
      </section>

      <section class="method-update section-narrow" id="metodo" aria-labelledby="method-title">
        <div class="method-update-heading">
          <p class="method-kicker">Revisão metodológica · ${escapeHtml(promptMethod.reviewedOn)}</p>
          <h2 id="method-title">Menos roteiro repetido. Mais contrato verificável.</h2>
          <p>
            A biblioteca continua independente de fornecedor, mas seu contrato comum foi revisto para o ${escapeHtml(promptMethod.reviewedFor)}: resultado visível, evidência, limites de autonomia, formato de saída e condição de parada.
          </p>
        </div>
        <div>
          <ol class="method-changes">
            <li><strong>Evidência rastreável</strong><span>Citar apenas fontes acessadas, ligar cada fonte ao ponto sustentado e declarar conflitos ou lacunas.</span></li>
            <li><strong>Autonomia proporcional</strong><span>Analisar sem mutar; executar mudanças locais quando pedidas; confirmar ações externas, destrutivas ou que ampliem o escopo.</span></li>
            <li><strong>Parada útil</strong><span>Solicitar o menor dado faltante, bloquear somente a conclusão dependente e continuar nas partes independentes.</span></li>
          </ol>
          <p class="method-note">
            A complexidade indicada em cada item é editorial e não equivale diretamente ao parâmetro <code>reasoning.effort</code>. Em uma migração de API, preserve primeiro o esforço atual e compare o mesmo nível com um abaixo em casos representativos.
          </p>
          <div class="method-links" aria-label="Documentação oficial da revisão">
            <a href="${promptMethod.promptingGuide}" target="_blank" rel="noopener noreferrer">Guia de prompts do GPT-5.6</a>
            <a href="${promptMethod.latestModelGuide}" target="_blank" rel="noopener noreferrer">Guia do modelo atual</a>
          </div>
        </div>
      </section>

      <!-- Asymmetric Editorial Benefits -->
      <section class="benefits section-band" aria-labelledby="benefits-title">
        <div class="section-heading">
          <h2 id="benefits-title">Feito para advogados que precisam de velocidade com lastro.</h2>
        </div>
        <div class="benefit-flow">
          <article class="benefit-main">
            <span class="benefit-num">01</span>
            <h3>Menos prompt solto</h3>
            <p>Estrutura fixa com objetivo, material, evidências, critérios de sucesso, limites de autonomia, saída e regras de parada para eliminar alucinações e lacunas.</p>
          </article>
          <div class="benefit-secondary-stack">
            <article>
              <span class="benefit-num">02</span>
              <h3>Mais controle jurídico</h3>
              <p>Instruções explícitas contra invenção de fatos, jurisprudência, dispositivos, prazos, valores e documentos.</p>
            </article>
            <article>
              <span class="benefit-num">03</span>
              <h3>Uso em rotina</h3>
              <p>Cada prompt ajuda a transformar uma tarefa recorrente em instrução persistente, rotina de repositório ou automação supervisionada.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="library section-band" id="biblioteca" aria-labelledby="library-title">
        <div class="library-top">
          <div>
            <h2 id="library-title">${totalPrompts} prompts jurídicos para copiar, adaptar e validar.</h2>
          </div>
          <p>
            Use a busca ou filtre por tema. Abra um item para ver prompt completo, insumos mínimos, exemplo, variações e arquitetura recomendada.
          </p>
        </div>

        <div class="library-tools" aria-label="Ferramentas da biblioteca">
          <label class="search-box">
            <span>Buscar prompt</span>
            <input id="prompt-search" type="search" placeholder="Ex.: contrato, sentença, WhatsApp, tráfego" autocomplete="off" />
          </label>
          <div class="filter-group">
            <span class="filter-label">Tema</span>
            <div class="filter-list" role="group" aria-label="Filtros por tema">
              ${filterChipsHtml}
            </div>
          </div>
          <p class="results-count" id="results-count" aria-live="polite">${totalPrompts} prompts encontrados</p>
        </div>

        <div class="prompt-grid" id="prompt-grid">
          ${promptCardsHtml}
        </div>

        <p class="empty-state" id="empty-state" hidden>Nenhum prompt encontrado com esse filtro.</p>
      </section>

      <!-- Typographic List Guide Flow -->
      <section class="guide section-narrow" id="guia" aria-labelledby="guide-title">
        <div class="section-heading">
          <h2 id="guide-title">Como usar os prompts</h2>
        </div>
        <div class="guide-flow">
          <article class="guide-item">
            <h3>01 · Uso avulso</h3>
            <p>Copie o prompt, substitua os campos entre colchetes, anexe documentos quando necessário e peça a resposta em seções. Ideal para uma tarefa pontual no chat.</p>
          </article>
          <article class="guide-item">
            <h3>02 · Rotina permanente</h3>
            <p>Quando a tarefa se repete, transforme o prompt em instrução persistente ou arquivo de orientação da rotina. Inclua modelos do escritório e critérios de aceite.</p>
          </article>
          <article class="guide-item">
            <h3>03 · Automação supervisionada</h3>
            <p>Use automações apenas para tarefas reversíveis ou revisáveis. Produções jurídicas, comunicações externas e decisões estratégicas exigem aprovação humana.</p>
          </article>
        </div>
      </section>

      <section class="practices section-band" id="boas-praticas" aria-labelledby="practices-title">
        <div class="section-heading">
          <h2 id="practices-title">A estrutura recomendada para prompts jurídicos.</h2>
        </div>
        <div class="practice-grid">
          <article>
            <h3>Destino antes do roteiro</h3>
            <p>Defina resultado, material disponível, restrições e o que precisa estar verdadeiro ao final. Prescreva etapas apenas quando mudarem o comportamento.</p>
          </article>
          <article>
            <h3>Contrato de saída</h3>
            <p>Defina exatamente as seções esperadas, tamanho, tom e formato. Isso reduz respostas longas, vagas ou difíceis de revisar.</p>
          </article>
          <article>
            <h3>Evidência rastreável</h3>
            <p>Cite somente fontes consultadas, ligue cada uma à afirmação sustentada e separe fato, inferência, conflito, lacuna e risco.</p>
          </article>
          <article>
            <h3>Regras de parada</h3>
            <p>Peça o menor dado faltante, continue nas partes independentes e não conclua o ponto que dependa de prova, prazo, autorização ou fonte ausente.</p>
          </article>
        </div>
      </section>

      <section class="limits section-narrow" id="limites" aria-labelledby="limits-title">
        <div>
          <h2 id="limits-title">IA acelera a preparação. A responsabilidade continua humana.</h2>
        </div>
        <div class="limits-copy">
          <p>
            Nenhum prompt desta biblioteca autoriza protocolo, envio ao cliente, publicação, campanha ou decisão jurídica sem revisão profissional. O modelo pode errar, omitir, inferir demais ou apresentar fonte aparente como se fosse válida.
          </p>
          <ul>
            <li>Confira legislação, jurisprudência, prazos, valores e citações em fontes oficiais.</li>
            <li>Proteja sigilo profissional, dados pessoais e documentos sensíveis.</li>
            <li>Separe fato provado, documento, inferência, lacuna e risco antes de usar a saída.</li>
            <li>Revise marketing jurídico contra o Código de Ética e o Provimento 205/2021 do CFOAB.</li>
          </ul>
        </div>
      </section>
    </main>

    <!-- Ft5 Statement Footer -->
    <footer class="site-footer" aria-label="Rodapé do site">
      <div class="footer-statement">
        <span class="brand-mark" aria-hidden="true">§</span>
        <div>
          <h2>Manual de prompts jurídicos para IA</h2>
          <p>Biblioteca pública em pt-BR com 41 prompts verificáveis para a advocacia brasileira. Método revisto em julho de 2026.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Revisão humana obrigatória. Proteja sigilo e fontes oficiais.</span>
        <div class="footer-links" aria-label="Links do projeto">
          <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.buymeacoffee.com/carloslimadv" target="_blank" rel="noopener noreferrer">Apoiar projeto</a>
          <a href="${repositoryUrl}" target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
        </div>
      </div>
    </footer>

    <script src="js/app.js" type="module"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');
console.log('Generated index.html');
