/* ==========================================================================
   Group Portfolio Theme Switcher Slider
   Sliding switch with Unicode Emoji (☀️ / 🌙) inside thumb
   ========================================================================== */

(function () {
  const savedTheme = localStorage.getItem('portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initialTheme);

  function updateToggleButton(theme) {
    const toggleBtns = document.querySelectorAll('.theme-switch');
    const isDark = theme === 'dark';

    toggleBtns.forEach(btn => {
      const iconSpan = btn.querySelector('.theme-icon');
      if (iconSpan) {
        // Light theme: ☀️ on thumb
        // Dark theme: 🌙 on thumb
        iconSpan.textContent = isDark ? '🌙' : '☀️';
      }
      btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
      const titleText = isDark ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối';
      btn.setAttribute('aria-label', titleText);
      btn.setAttribute('title', titleText);
    });
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
    updateToggleButton(newTheme);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateToggleButton(currentTheme);

    const toggleBtns = document.querySelectorAll('.theme-switch');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();
