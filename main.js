document.addEventListener('DOMContentLoaded', () => {
  // Floating particles
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.prepend(particlesContainer);

  for (let i = 0; i < 26; i++) {
    const span = document.createElement('span');
    const size = Math.random() * 2.2 + 1;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (Math.random() * 16 + 12) + 's';
    span.style.animationDelay = (Math.random() * 12) + 's';
    span.style.opacity = Math.random() * 0.5 + 0.25;
    particlesContainer.appendChild(span);
  }

  // Page transition
  const transition = document.createElement('div');
  transition.className = 'page-transition';
  transition.innerHTML = '<div class="loader"></div>';
  document.body.appendChild(transition);

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
      e.preventDefault();
      transition.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 400);
    });
  });

  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
