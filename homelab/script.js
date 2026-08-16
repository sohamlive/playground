// Subtle fade-up on scroll for content blocks — respects reduced-motion.

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.block, figure');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    return;
  }

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
});
