const carousel = document.getElementById('carousel');
const track = carousel.querySelector('.track');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
const slides = Array.from(track.children);

let currentIndex = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlidePosition();
});

// Optional autoplay
setInterval(() => {
  nextBtn.click();
}, 5000);
