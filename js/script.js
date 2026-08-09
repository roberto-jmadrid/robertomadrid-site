// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Duplicate console lines so the CSS scroll loop has no visible seam
  document.querySelectorAll('.console-body').forEach((body) => {
    const lines = Array.from(body.children);
    lines.forEach((line) => {
      body.appendChild(line.cloneNode(true));
    });
  });
});
