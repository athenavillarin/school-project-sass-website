const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      if (image.style.opacity === '0') {
        image.classList.add('image-fade-in');
      }
    }
  });
});

const images = document.querySelectorAll('.guide-container img');
images.forEach(image => {
  observer.observe(image);
  image.style.opacity = '0';
});