// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector(e.target.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll to Projects
  function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Animations
  gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1 });
  gsap.from("#hero p", { opacity: 0, x: -50, duration: 1, delay: 0.5 });
  