const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-ul');
  const navfade = document.querySelectorAll('.nav-ul li');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navfade.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navfade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    hamburger.classList.toggle('animate');
  });
};
navSlide();
