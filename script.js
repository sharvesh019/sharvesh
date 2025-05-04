document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll('.fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(el => observer.observe(el));
});
// Scroll-triggered fade-in animation
const sections = document.querySelectorAll('.section');

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('fade-in'); // Initial hidden style
  observer.observe(section);
});
