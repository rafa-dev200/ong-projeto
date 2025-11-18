# Entrega III — Interatividade com JavaScript  
Projeto da disciplina **Web Front-End**

Terceira etapa do desenvolvimento do site: aplicação de **JavaScript** para adicionar interatividade, validações e manipulação dinâmica do DOM.

---

##  Objetivo da Atividade
Adicionar funcionalidades em JavaScript para tornar o site interativo e funcional, garantindo melhor experiência do usuário através de validações, navegação aprimorada e comportamento dinâmico.

---

##  Funcionalidades Implementadas

###  Validação de Formulário
- Verificação de campos obrigatórios  
- Alertas ao usuário em caso de erro  
- Prevenção de envio com dados inválidos  
- Feedback visual indicando campos incorretos  

###  Modo Escuro (Dark Mode)
- Botão para alternar entre modo claro/escuro  
- Alteração de cores via manipulação do DOM  
- Modo salvo enquanto a página está aberta  

###  Menu Mobile com Botão Hambúrguer
- Exibição/ocultação do menu  
- Transições suaves  
- Navegação acessível para dispositivos móveis  

###  Máscaras e Dicas de Preenchimento
- Auxílio ao usuário no campo de CPF  
- Máscara para telefone  
- Formato correto de data  
- Tratadas via funções JavaScript modulares  

###  Manipulação do DOM
- Alteração de classes  
- Exibição e ocultação de elementos  
- Eventos de clique e envio  

###  Código Modular
Todo o código JavaScript organizado dentro de `/scripts/scripts.js`, separado em funções claras:

- `toggleMenu()`  
- `toggleDarkMode()`  
- `validarFormulario()`  
- funções auxiliares para máscaras  

---

##  Estrutura de Pastas da Atividade

atividade3/
│
├── img/ ← imagens utilizadas no site
│
├── scripts/
│ └── scripts.js ← funções JS (menu, dark mode, validação, máscaras)
│
├── styles/
│ └── styles.css ← estilos da etapa 2 reaproveitados
│
├── cadastro.html ← com validação e máscaras
├── index.html ← com dark mode e menu mobile
└── projetos.html ← com interações JS integradas


---

##  Autor  
**Rafael de Souza**
