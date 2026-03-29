/* ══════════════════════════════════════════════════
   chamada.js  —  Lógica de chamada / presença
   ONG Fonte da Vida · Conexus
══════════════════════════════════════════════════ */

/**
 * Estado da chamada atual.
 * Populado por initChamada() com base na turma selecionada.
 */
let students = [];

/**
 * Inicializa a chamada.
 * Usa ALUNOS_SABRINA_MANHA por padrão (turma do select).
 */
function initChamada() {
  // Carrega alunos reais da turma Sabrina Manhã
  students = ALUNOS_SABRINA_MANHA.map(a => ({
    nm:    a.nm,
    age:   a.turma,
    state: 'pendente'
  }));

  const list = document.getElementById('chamada-list');
  list.innerHTML = '';

  students.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'chamada-row';
    row.id = 'cr-' + i;
    row.innerHTML = `
      <span class="cr-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="cr-info">
        <div class="cr-name">${s.nm}</div>
        <div class="cr-meta">${s.age}</div>
      </div>
      <div class="cr-status">
        <button class="cr-btn cr-btn-p" onclick="markPresence(${i},'presente')">Presente</button>
        <button class="cr-btn cr-btn-a" onclick="markPresence(${i},'ausente')">Ausente</button>
      </div>
      <div class="chamada-obs">
        <input type="text" placeholder="Obs...">
      </div>
    `;
    list.appendChild(row);
  });

  updateSummary();
}

/**
 * Marca presença ou ausência de um aluno.
 * @param {number} i     - índice no array students
 * @param {string} state - 'presente' | 'ausente'
 */
function markPresence(i, state) {
  students[i].state = state;

  const row = document.getElementById('cr-' + i);
  row.className = 'chamada-row ' + state;

  row.querySelectorAll('.cr-btn').forEach(b => b.classList.remove('active'));
  const target = row.querySelector('.cr-btn-' + (state === 'presente' ? 'p' : 'a'));
  if (target) target.classList.add('active');

  updateSummary();
}

/**
 * Atualiza os contadores do resumo ao vivo.
 */
function updateSummary() {
  const pres = students.filter(s => s.state === 'presente').length;
  const aus  = students.filter(s => s.state === 'ausente').length;
  const pend = students.filter(s => s.state === 'pendente').length;

  const el_total = document.getElementById('c-total');
  const el_p     = document.getElementById('c-pres');
  const el_a     = document.getElementById('c-aus');
  const el_d     = document.getElementById('c-pend');

  if (el_total) el_total.textContent = students.length;
  if (el_p)     el_p.textContent     = pres;
  if (el_a)     el_a.textContent     = aus;
  if (el_d)     el_d.textContent     = pend;
}

// ── Init on load ──────────────────────────────────────────────
initChamada();
