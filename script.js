// Alternador de Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Verificar preferência salva
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
}

themeToggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let theme = document.body.getAttribute('data-theme');
  
  if (theme === 'light') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});