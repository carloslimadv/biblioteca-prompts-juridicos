document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#prompt-search');
  const categoryButtons = [...document.querySelectorAll('[data-category-filter]')];
  const cards = [...document.querySelectorAll('.prompt-card')];
  const count = document.querySelector('#results-count');
  const empty = document.querySelector('#empty-state');
  const promptsUrl = document.querySelector('main')?.dataset.promptsUrl ?? 'prompts.json';
  let promptMapPromise;
  let activeCategory = 'all';

  async function getPromptMap() {
    if (!promptMapPromise) {
      promptMapPromise = fetch(promptsUrl)
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        })
        .then((items) => new Map(items.map((item) => [item.id, item.prompt])))
        .catch((err) => {
          console.error('Error fetching prompts:', err);
          promptMapPromise = null;
          throw err;
        });
    }

    return promptMapPromise;
  }

  async function hydratePrompt(card) {
    const promptId = card?.dataset.promptId;
    const pre = promptId ? document.getElementById(`prompt-text-${promptId}`) : null;
    if (!promptId || !pre || pre.dataset.loaded === 'true') return pre;

    pre.textContent = 'Carregando prompt completo...';
    try {
      const promptMap = await getPromptMap();
      pre.textContent = promptMap.get(promptId) ?? 'Prompt não encontrado.';
      pre.dataset.loaded = 'true';
    } catch (err) {
      pre.textContent = 'Erro ao carregar prompt. Tente novamente.';
    }
    return pre;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  }

  function showCopyFeedback(button, label) {
    const original = button.textContent;
    button.textContent = label;
    button.classList.add('copied');
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1400);
  }

  function openPromptFromHash() {
    const promptId = window.location.hash.slice(1);
    if (!promptId || ['biblioteca', 'guia', 'boas-praticas', 'limites', 'topo'].includes(promptId)) return;

    const card = document.getElementById(promptId);
    const details = card?.querySelector('details');
    if (!card || !details) return;

    details.open = true;
    hydratePrompt(card);
    card.scrollIntoView({ block: 'start' });
  }

  function normalize(value) {
    return value
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  cards.forEach((card) => {
    card.dataset.searchNormalized = normalize(card.dataset.search ?? '');
  });

  function applyFilters() {
    const query = normalize(searchInput?.value ?? '');
    let visible = 0;

    cards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesSearch = !query || card.dataset.searchNormalized.includes(query);
      const shouldShow = matchesCategory && matchesSearch;
      card.toggleAttribute('hidden', !shouldShow);
      if (shouldShow) visible += 1;
    });

    if (count) count.textContent = `${visible} prompt${visible === 1 ? '' : 's'} encontrado${visible === 1 ? '' : 's'}`;
    if (empty) empty.hidden = visible !== 0;
  }

  function bindFilter(buttons, datasetKey, setActive) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setActive(button.dataset[datasetKey] ?? 'all');
        buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        applyFilters();
      });
    });
  }

  bindFilter(categoryButtons, 'categoryFilter', (value) => {
    activeCategory = value;
  });

  searchInput?.addEventListener('input', applyFilters);

  document.querySelectorAll('.prompt-card details').forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) hydratePrompt(details.closest('.prompt-card'));
    });
  });

  document.querySelectorAll('[data-copy-prompt]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = await hydratePrompt(button.closest('.prompt-card'));
      if (!target) return;

      const text = target.textContent ?? '';
      await copyText(text);
      showCopyFeedback(button, 'Copiado');
    });
  });

  document.querySelectorAll('[data-copy-link]').forEach((button) => {
    button.addEventListener('click', async () => {
      const promptId = button.dataset.promptId;
      if (!promptId) return;

      const url = new URL(window.location.href);
      url.hash = promptId;
      await copyText(url.toString());
      showCopyFeedback(button, 'Link copiado');
    });
  });

  openPromptFromHash();
  window.addEventListener('hashchange', openPromptFromHash);

  const sections = [...document.querySelectorAll('#biblioteca, #guia, #boas-praticas, #limites')];
  const navLinks = [...document.querySelectorAll('.nav a')];
  const linkById = new Map(navLinks.map((link) => [link.getAttribute('href')?.slice(1), link]));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        navLinks.forEach((link) => link.removeAttribute('aria-current'));
        linkById.get(visible.target.id)?.setAttribute('aria-current', 'page');
      },
      { rootMargin: '-24% 0px -62% 0px', threshold: [0.12, 0.28, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
  }
});
