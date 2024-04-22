function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// script.js
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Optional: Store the preference in local storage 
  if (body.classList.contains('dark-mode ')) {
    localStorage.setItem('theme', 'dark'); 
  } else {
    localStorage.setItem('theme', 'light'); 
  }
});

// Optional: Check for saved preference 
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode ');
}
