document.addEventListener('DOMContentLoaded', () => {
  // Animación de entrada para secciones (excepto hero)
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach(section => section.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));

  // Menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
    menuToggle.innerHTML = menuToggle.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Cerrar menú al hacer scroll
  window.addEventListener('scroll', () => {
    if (navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      menuToggle.classList.remove('open');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Función para mostrar/ocultar contenido tipo acordeón
function toggleInfo(button, id) {
  const content = document.getElementById(id);
  const allContents = document.querySelectorAll('.info-content');
  const allButtons = document.querySelectorAll('.toggle-btn');

  allContents.forEach(section => {
    if (section.id !== id) {
      section.classList.remove('visible');
      section.classList.add('hidden');
    }
  });

  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.textContent = '+';
    }
  });

  const isVisible = content.classList.contains('visible');
  content.classList.toggle('visible', !isVisible);
  content.classList.toggle('hidden', isVisible);
  button.textContent = isVisible ? '+' : '–';
}