// Функция для переключения темы и сохранения состояния в локальном хранилище
function toggleTheme() {
    var body = document.body;
    var themeToggle = document.getElementById('themeToggle');
    body.classList.toggle('dark-theme');
    
    // Сохраняем состояние темы в локальном хранилище
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
  }
  
  // Проверяем состояние темы при загрузке страницы и применяем соответствующую тему
  document.addEventListener('DOMContentLoaded', function() {
    var theme = localStorage.getItem('theme');
    var body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    }
  });
  