
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    el.style.animationDelay = Math.random() * 0.6 + 's';
  });
});
