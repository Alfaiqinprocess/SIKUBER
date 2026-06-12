// SIKUBER - Main JS

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loadingScreen');
    if (ls) { ls.classList.add('hidden'); setTimeout(() => ls.remove(), 600); }
  }, 800);
});

// Progress Bar
window.addEventListener('scroll', () => {
  const bar = document.getElementById('progressBar');
  if (bar) {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }
});

// Navbar scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger menu
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// Dark Mode
const dmToggle = document.getElementById('darkModeToggle');
const applyDark = (on) => {
  document.body.classList.toggle('dark-mode', on);
  if (dmToggle) dmToggle.textContent = on ? '☀️' : '🌙';
};
const saved = localStorage.getItem('darkMode');
if (saved) applyDark(saved === 'true');
if (dmToggle) {
  dmToggle.addEventListener('click', () => {
    const on = !document.body.classList.contains('dark-mode');
    applyDark(on);
    localStorage.setItem('darkMode', on);
  });
}

// Scroll to Top
const stt = document.getElementById('scrollToTop');
if (stt) {
  window.addEventListener('scroll', () => stt.classList.toggle('visible', window.scrollY > 400));
  stt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in, .slide-in-left').forEach(el => observer.observe(el));
