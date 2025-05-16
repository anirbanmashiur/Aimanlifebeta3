window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const parallax = document.querySelector('.parallax-video');
    parallax.style.transform = `translateY(${scrollValue * 0.4}px)`;
  });