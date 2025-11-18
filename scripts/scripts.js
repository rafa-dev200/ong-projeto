// MENU RESPONSIVO
function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('active');
}

// ANO AUTOMÁTICO NO RODAPÉ
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// FORMULÁRIO DE CADASTRO
const form = document.getElementById('formCadastro');
if (form) {
  const msg = document.getElementById('mensagem');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();

    if (nome === "") {
      msg.textContent = "Por favor, preencha o nome corretamente.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = `Obrigado pelo cadastro, ${nome}! Entraremos em contato em breve.`;
    msg.style.color = "green";
    form.reset();
  });
}
