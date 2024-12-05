// Toggle navigation links on small screens
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    } else {
      alert('Form submitted successfully!');
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  