import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Import data from TypeScript source
import { categories, promptMethod, prompts } from './src/data/prompts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, 'dist');

// Start clean so files removed from the source cannot linger in a deployment.
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 1. Copy static assets to the isolated publish directory.
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  for (const file of publicFiles) {
    fs.cpSync(path.join(publicDir, file), path.join(outputDir, file), { recursive: true });
  }
}
for (const directory of ['js', 'styles']) {
  fs.cpSync(path.join(__dirname, directory), path.join(outputDir, directory), { recursive: true });
}
console.log('Copied static assets to dist');

// 2. Generate prompts.json
const promptsJsonData = prompts.map((prompt) => ({
  id: prompt.id,
  prompt: prompt.prompt,
}));

fs.writeFileSync(
  path.join(outputDir, 'prompts.json'),
  JSON.stringify(promptsJsonData, null, 2),
  'utf-8'
);
console.log('Generated prompts.json');

// 3. Group prompts by category, keeping the catalog order.
const totalPrompts = prompts.length;
const canonicalUrl = 'https://carloslimadv.github.io/biblioteca-prompts-juridicos/';
const instagramUrl = 'https://www.instagram.com/henriquesantana.adv/';
const supportUrl = 'https://www.buymeacoffee.com/carloslimadv';
const repositoryUrl = 'https://github.com/carloslimadv/biblioteca-prompts-juridicos';
const fontStylesheet =
  'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..900&family=Hanken+Grotesk:wght@400..700&display=swap';

const groups = categories
  .filter((category) => category.id !== 'all')
  .map((category) => ({ ...category, items: prompts.filter((prompt) => prompt.category === category.id) }))
  .filter((group) => group.items.length > 0);

const countLabel = (count) => `${count} prompt${count === 1 ? '' : 's'}`;

const filterChipsHtml = categories
  .map(
    (category) => `
          <button class="chip" type="button" data-category-filter="${category.id}" aria-pressed="${category.id === 'all' ? 'true' : 'false'}">${escapeHtml(category.label)}</button>`
  )
  .join('');

const promptCardHtml = (prompt) => {
  const searchAttr = `${prompt.title} ${prompt.purpose} ${prompt.categoryLabel} ${prompt.needs.join(' ')}`;
  const needsList = prompt.needs.map((need) => `<li>${escapeHtml(need)}</li>`).join('');
  const coworkNote = prompt.cowork
    ? '<p class="cowork-note">Funciona melhor no Cowork, com a pasta do caso aberta.</p>'
    : '';

  return `
            <article id="${prompt.id}" class="prompt-card" data-prompt-id="${prompt.id}" data-category="${prompt.category}" data-search="${escapeHtml(searchAttr)}">
              <details>
                <summary>
                  <span class="prompt-title">${escapeHtml(prompt.title)}</span>
                  <span class="prompt-purpose">${escapeHtml(prompt.purpose)}</span>
                  <span class="prompt-toggle" aria-hidden="true">+</span>
                </summary>
                <div class="prompt-body">
                  <div class="prompt-needs">
                    ${coworkNote}
                    <p class="needs-title">Tenha em mãos</p>
                    <ul>${needsList}</ul>
                  </div>
                  <button class="button button-dark" type="button" data-copy-prompt>Copiar prompt</button>
                  <details class="prompt-text">
                    <summary>Ver o texto do prompt</summary>
                    <pre id="prompt-text-${prompt.id}" data-loaded="false">Carregando…</pre>
                  </details>
                </div>
              </details>
            </article>`;
};

const groupsHtml = groups
  .map(
    (group) => `
          <section class="prompt-group" data-group="${group.id}" aria-labelledby="grupo-${group.id}">
            <h3 id="grupo-${group.id}"><span>${escapeHtml(group.label)}</span><small data-group-count>${countLabel(group.items.length)}</small></h3>
            ${group.items.map(promptCardHtml).join('')}
          </section>`
  )
  .join('');

const htmlContent = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${totalPrompts} prompts jurídicos gratuitos em português, prontos para copiar e colar no Claude. Para advogados que não entendem de IA." />
    <meta property="og:title" content="Prompts jurídicos para Claude" />
    <meta property="og:description" content="${totalPrompts} prompts prontos para o dia a dia do escritório: petições, prazos, clientes e gestão." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta name="twitter:card" content="summary" />
    <meta name="theme-color" content="#fafaf7" />
    <meta name="color-scheme" content="light" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="${fontStylesheet}" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="${fontStylesheet}" /></noscript>
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="styles/global.css" />
    <title>Prompts jurídicos para Claude</title>
  </head>
  <body>
    <a class="skip-link" href="#biblioteca">Ir para os prompts</a>
    <header class="site-header">
      <div class="wrap header-row">
        <a class="brand" href="#topo">Prompts jurídicos</a>
        <nav class="nav" aria-label="Navegação principal">
          <a href="#biblioteca">Prompts</a>
          <a href="#como-usar">Como usar</a>
          <a href="#cuidados">Cuidados</a>
        </nav>
      </div>
    </header>
    <main id="topo" data-prompts-url="prompts.json">
      <section class="hero">
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="kicker">Biblioteca gratuita · ${totalPrompts} prompts</p>
            <h1>Prompts prontos para o dia a dia do escritório.</h1>
            <p class="lead">Copie, cole no Claude, preencha os campos entre colchetes e revise o resultado. <mark>Não precisa entender de IA.</mark></p>
            <div class="hero-actions">
              <a class="button button-dark" href="#biblioteca">Ver os prompts</a>
              <a class="text-link" href="#como-usar">Como usar em 3 passos</a>
            </div>
          </div>
          <ol class="steps">
            <li><span class="step-num">1</span><span><strong>Escolha o prompt da tarefa</strong>Petição, prazo, cliente ou gestão.</span></li>
            <li><span class="step-num">2</span><span><strong>Cole no Claude e preencha</strong>Troque cada [preencher] pelo documento ou dado do caso.</span></li>
            <li><span class="step-num">3</span><span><strong>Revise antes de usar</strong>O Claude marca o que não conseguiu confirmar.</span></li>
          </ol>
        </div>
      </section>

      <section class="library" id="biblioteca" aria-labelledby="library-title">
        <div class="wrap library-inner">
          <div class="library-top">
            <h2 id="library-title">Os prompts</h2>
            <label class="search">
              <span>Buscar</span>
              <input id="prompt-search" type="search" placeholder="Ex.: inicial, prazo, WhatsApp" autocomplete="off" />
            </label>
          </div>
          <div class="chips" role="group" aria-label="Filtrar por assunto">${filterChipsHtml}
          </div>
          <p class="visually-hidden" id="results-count" aria-live="polite">${totalPrompts} prompts encontrados</p>
          <p class="empty-state" id="empty-state" hidden>Nenhum prompt encontrado. Tente outra palavra.</p>
          ${groupsHtml}
        </div>
      </section>

      <section class="how" id="como-usar" aria-labelledby="how-title">
        <div class="wrap">
          <h2 id="how-title">Onde colar o prompt</h2>
          <div class="how-grid">
            <article>
              <h3>Na conversa do Claude</h3>
              <p>Para uma tarefa só. Cole o prompt, anexe os documentos e envie.</p>
            </article>
            <article>
              <h3>Em um Projeto</h3>
              <p>Para a tarefa que se repete toda semana. Salve o prompt nas instruções do Projeto e use sempre.</p>
            </article>
            <article>
              <h3>No Cowork</h3>
              <p>Quando o Claude precisa ler a pasta do caso no seu computador. Ele pede licença antes de mover ou apagar arquivos.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="care" id="cuidados" aria-labelledby="care-title">
        <div class="wrap care-grid">
          <h2 id="care-title">A IA prepara. Quem assina é você.</h2>
          <ul>
            <li>Confira lei, jurisprudência, prazo e valor na fonte oficial antes de usar.</li>
            <li>Onde aparecer [CONFERIR EM FONTE OFICIAL], o Claude não conseguiu confirmar.</li>
            <li>Não envie dado de cliente sem necessidade; proteja o sigilo.</li>
            <li>Conteúdo para redes passa pelo Provimento 205/2021 da OAB.</li>
          </ul>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="wrap footer-row">
        <span class="brand brand-light">Prompts jurídicos</span>
        <nav aria-label="Links do projeto">
          <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="${supportUrl}" target="_blank" rel="noopener noreferrer">Apoiar o projeto</a>
          <a href="${repositoryUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <p class="footer-note">Material de apoio gratuito. Revisão humana obrigatória antes de qualquer uso profissional. Prompts revistos em ${escapeHtml(promptMethod.reviewedOn)} segundo as <a href="${promptMethod.promptingGuide}" target="_blank" rel="noopener noreferrer">boas práticas da Anthropic</a>.</p>
      </div>
    </footer>
    <script src="js/app.js" type="module"></script>
  </body>
</html>
`;
fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent, 'utf-8');
console.log('Generated index.html');
