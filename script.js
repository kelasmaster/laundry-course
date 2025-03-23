// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form Submission (Example)
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login successful!');
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
});
