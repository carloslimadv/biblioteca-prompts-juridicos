document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#prompt-search');
  const categoryButtons = [...document.querySelectorAll('[data-category-filter]')];
  const cards = [...document.querySelectorAll('.prompt-card')];
  const groups = [...document.querySelectorAll('.prompt-group')];
  const count = document.querySelector('#results-count');
  const empty = document.querySelector('#empty-state');
  const promptsUrl = document.querySelector('main')?.dataset.promptsUrl ?? 'prompts.json';
  const sectionIds = ['topo', 'biblioteca', 'como-usar', 'cuidados'];
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

    try {
      const promptMap = await getPromptMap();
      pre.textContent = promptMap.get(promptId) ?? 'Prompt não encontrado.';
      pre.dataset.loaded = 'true';
    } catch (err) {
      pre.textContent = 'Erro ao carregar o prompt. Recarregue a página.';
    }
    return pre;
  }

  function showCopyFeedback(button, label) {
    const original = button.textContent;
    button.textContent = label;
    button.classList.add('copied');
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1600);
  }

  function openPromptFromHash() {
    const promptId = window.location.hash.slice(1);
    if (!promptId || sectionIds.includes(promptId)) return;

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
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase();
  }

  cards.forEach((card) => {
    card.dataset.searchNormalized = normalize(card.dataset.search ?? '');
  });

  function applyFilters() {
    const query = normalize(searchInput?.value ?? '').trim();
    let visible = 0;

    cards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesSearch = !query || card.dataset.searchNormalized.includes(query);
      const shouldShow = matchesCategory && matchesSearch;
      card.toggleAttribute('hidden', !shouldShow);
      if (shouldShow) visible += 1;
    });

    groups.forEach((group) => {
      const shown = group.querySelectorAll('.prompt-card:not([hidden])').length;
      group.toggleAttribute('hidden', shown === 0);
      const label = group.querySelector('[data-group-count]');
      if (label) label.textContent = `${shown} prompt${shown === 1 ? '' : 's'}`;
    });

    if (count) count.textContent = `${visible} prompt${visible === 1 ? '' : 's'} encontrado${visible === 1 ? '' : 's'}`;
    if (empty) empty.hidden = visible !== 0;
  }

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.categoryFilter ?? 'all';
      categoryButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFilters();
    });
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
      if (!target || target.dataset.loaded !== 'true') return;

      try {
        await navigator.clipboard.writeText(target.textContent ?? '');
        showCopyFeedback(button, 'Copiado');
      } catch (error) {
        console.error('Failed to copy text: ', error);
        target.closest('.prompt-text')?.setAttribute('open', '');
        showCopyFeedback(button, 'Copie o texto abaixo');
      }
    });
  });

  openPromptFromHash();
  window.addEventListener('hashchange', openPromptFromHash);

  const sections = sectionIds.slice(1).map((id) => document.getElementById(id)).filter(Boolean);
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
