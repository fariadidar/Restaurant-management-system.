async function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    for (const el of includes) {
      const file = el.getAttribute('data-include');
      const response = await fetch(file);
      const html = await response.text();
      el.innerHTML = html;
    }
  }
  
  includeHTML();
  