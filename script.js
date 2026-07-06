const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  rootElement.setAttribute('data-theme', newTheme);
  
  if (newTheme === 'dark') {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙' ;
  }
});
