/* ══════════════════════════════════════════════════
   app.js  —  Entry point / bootstrap
   Inicializa a aplicação Conexus
   ONG Fonte da Vida · Conexus
══════════════════════════════════════════════════ */

/**
 * Ponto de entrada da aplicação.
 * Todos os outros módulos (data.js, navigation.js, chamada.js)
 * devem ser carregados antes deste arquivo no HTML.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Garante que a tela inicial seja o Login
  go('login');
});
