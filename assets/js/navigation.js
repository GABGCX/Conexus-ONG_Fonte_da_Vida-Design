/* ══════════════════════════════════════════════════
   navigation.js  —  Screen navigation & UI helpers
   ONG Fonte da Vida · Conexus
══════════════════════════════════════════════════ */

/** IDs de todas as telas */
const SCREEN_IDS = [
  'login','cadastro','dashboard','chamada','pessoas',
  'pessoa-form','pessoa-det','turmas','atendimentos',
  'relatorios','usuarios','tokens'
];

/** Mapa tela → índice da aba no preview nav */
const TAB_MAP = {
  login:0, cadastro:1, dashboard:2, chamada:3, pessoas:4,
  'pessoa-form':5, 'pessoa-det':6, turmas:7, atendimentos:8,
  relatorios:9, usuarios:10, tokens:11
};

/**
 * Navega para uma tela pelo seu ID.
 * @param {string} id - chave do SCREEN_IDS / TAB_MAP
 */
function go(id) {
  SCREEN_IDS.forEach(s => {
    const el = document.getElementById('s-' + s);
    if (el) el.classList.remove('active');
  });

  const el = document.getElementById('s-' + id);
  if (el) el.classList.add('active');

  const tabs = document.querySelectorAll('.pnav-tabs .ptab');
  tabs.forEach(t => t.classList.remove('active'));
  const i = TAB_MAP[id] ?? 0;
  if (tabs[i]) tabs[i].classList.add('active');

  window.scrollTo(0, 0);
}

/**
 * Seleciona um chip dentro de .chips-row
 * @param {HTMLElement} el - o chip clicado
 */
function selectChip(el) {
  el.closest('.chips-row')
    .querySelectorAll('.chip')
    .forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

/**
 * Mostra/oculta a seção de responsável no form de pessoa
 */
function toggleResponsavel() {
  const tipo = document.getElementById('tipo-select').value;
  const sec  = document.getElementById('responsavel-section');
  sec.style.display = (tipo === 'beneficiario') ? 'block' : 'none';
}

// ── Init ──────────────────────────────────────────────────────
document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => selectChip(c));
});
