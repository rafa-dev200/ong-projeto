// ============================================
// Associação Santo André - Interatividade
// Autor: Rafael de Souza
// ============================================

// 🟢 MENU HAMBÚRGUER
function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('active');
}

// 🌙 MODO ESCURO
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const button = document.querySelector('.dark-toggle');
  button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// 📅 ANO AUTOMÁTICO NO RODAPÉ
document.addEventListener('DOMContentLoaded', () => {
  // Adiciona os event listeners aos botões
  const menuButton = document.querySelector('.menu-toggle');
  if (menuButton) menuButton.addEventListener('click', toggleMenu);

  const darkModeButton = document.querySelector('.dark-toggle');
  if (darkModeButton) darkModeButton.addEventListener('click', toggleDarkMode);

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// 💫 ANIMAÇÕES SUAVES AO ROLAR
const animatedElements = document.querySelectorAll('.card-info, .hero-content, .about, .contact, .stats, .project-card');

function showOnScroll() {
  const windowBottom = window.innerHeight + window.scrollY;
  animatedElements.forEach((el) => {
    const elementTop = el.offsetTop + 100;
    if (windowBottom > elementTop) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// 📝 FORMULÁRIO DE CADASTRO
const form = document.getElementById('formCadastro');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura dos dados básicos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!nome || !email || !cpf || !telefone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação simples de e-mail
    if (!email.includes('@') || !email.includes('.')) {
      alert('Digite um e-mail válido.');
      return;
    }

    // Exibição de mensagem de sucesso
    let msg = document.getElementById('mensagem');
    if (!msg) {
      msg = document.createElement('p');
      msg.id = 'mensagem';
      form.appendChild(msg);
    }

    msg.textContent = '✅ Cadastro enviado com sucesso! Obrigado por fazer parte da Associação Santo André.';
    msg.style.color = '#2a9d8f';
    msg.style.opacity = '1';

    form.reset(); // limpa os campos
  });
}
