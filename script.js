// =============================================
// NAVEGAÇÃO SUAVE E ATIVA
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Atualizar link ativo na navbar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// =============================================
// MENU HAMBURGER (Mobile)
// =============================================

const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// =============================================
// ANIMAÇÕES AO SCROLL
// =============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .team-card, .stat-card, .contact-item').forEach(el => {
  observer.observe(el);
});

// =============================================
// ANIMAÇÃO FADE IN UP
// =============================================

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// =============================================
// EFEITO PARALLAX NO HERO
// =============================================

const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroContent = heroSection.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
  });
}

// =============================================
// VALIDAÇÃO DE LINKS DE CONTATO
// =============================================

document.querySelectorAll('.contact-text a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      // Permitir comportamento padrão
      return true;
    }
  });
});

console.log('✓ TechSolutions - Script carregado com sucesso!');
