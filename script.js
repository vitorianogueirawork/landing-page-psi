// Nav scroll effect
  const navlogo = document.getElementById('navlogo');
  window.addEventListener('scroll', () => {
    navlogo.classList.toggle('scrolled', window.scrollY > 30);
  });
 
  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
 
  reveals.forEach(el => observer.observe(el));