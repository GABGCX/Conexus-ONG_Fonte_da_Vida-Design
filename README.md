# Conexus — ONG Fonte da Vida

Interface de gestão de frequência, turmas e atendimentos da ONG Fonte da Vida (Fortaleza, CE).

---

## Estrutura do Projeto

```
conexus/
├── index.html               # Markup de todas as telas (SPA estático)
├── assets/
│   ├── css/
│   │   ├── tokens.css       # Design tokens: variáveis CSS, cores, tipografia, sombras
│   │   ├── components.css   # Componentes reutilizáveis: botões, badges, campos, cards, tabelas
│   │   ├── layout.css       # Shell da aplicação: sidebar, bottom nav, main, page chrome
│   │   └── screens.css      # Estilos específicos de cada tela
│   └── js/
│       ├── data.js          # Dados reais: alunos, turmas, idosos (seed das planilhas)
│       ├── navigation.js    # Navegação entre telas (go), chips, toggle responsável
│       ├── chamada.js       # Lógica de chamada: initChamada, markPresence, updateSummary
│       └── app.js           # Entry point: bootstrap da aplicação
└── README.md
```

---

## Telas disponíveis

| Tela           | ID no go()      | Descrição                             |
|----------------|-----------------|---------------------------------------|
| Login          | `login`         | Autenticação com email/senha          |
| Cadastro       | `cadastro`      | Solicitação de acesso                 |
| Dashboard      | `dashboard`     | KPIs, gráficos e ações rápidas        |
| Chamada        | `chamada`       | Registro de presença por turma        |
| Pessoas        | `pessoas`       | Listagem de beneficiários/educadores  |
| Cad. Pessoa    | `pessoa-form`   | Formulário de cadastro de pessoa      |
| Detalhe Pessoa | `pessoa-det`    | Perfil + frequência individual        |
| Turmas         | `turmas`        | Cards de turmas com stats             |
| Atendimentos   | `atendimentos`  | Histórico de registros de presença    |
| Relatórios     | `relatorios`    | KPIs e frequência por turma           |
| Usuários       | `usuarios`      | Gerenciamento de acesso ao sistema    |
| Design System  | `tokens`        | Referência de cores, tipo e componentes|

---

## Turmas (dados reais — 2026)

| Turma                          | Educador(a)  | Turno  | Qtd |
|-------------------------------|--------------|--------|-----|
| 1º e 2º Ano — Reforço Escolar | Tia Sabrina  | Manhã  | 12  |
| 1º e 2º Ano — Reforço Escolar | Tia Sabrina  | Tarde  | 16  |
| 3º ao 6º Ano — Reforço Escolar| Tia Alana    | Manhã  | 13  |
| 3º ao 6º Ano — Reforço Escolar| Tia Alana    | Tarde  | 19  |
| Infantil V                    | Tia Karole   | Tarde  |  6  |
| Fonte Ativa — Idosos          | Saulo Pinho  | Manhã  | 30  |

---

## Como abrir

Basta abrir `index.html` diretamente no navegador — não há dependências de build.

Para desenvolvimento local com live reload recomendado:

```bash
# VS Code
# instale a extensão Live Server e clique em "Go Live"

# ou via npx
npx serve .
```

---

## Próximos passos sugeridos

- [ ] Migrar para Vue 3 + NestJS (conforme especificação Conexus)
- [ ] Integrar Supabase Auth para login real
- [ ] Criar endpoints REST: `/pessoas`, `/turmas`, `/atendimentos`
- [ ] Implementar chamada com persistência (POST /atendimentos/bulk)
- [ ] Exportação de relatórios em PDF/CSV

---

*ONG Fonte da Vida · Fortaleza, CE · LGPD em conformidade*
