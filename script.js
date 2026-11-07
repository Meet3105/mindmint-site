// Keep the copyright year current without requiring a build step.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Give the top navigation a small confirmation when the visitor returns home.
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', () => {
    const toast = document.querySelector('.toast');
    if (!toast) return;
    toast.textContent = 'A little more room to grow.';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  });
});
