/* в этот файл добавляет скрипты*/
const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const toggles = document.querySelectorAll('.slider__toggle');

let currentSlide = 0;

function showSlide(index) {
  // скрываем слайды
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });

  // обновляем состояние кнопок и пагинации
  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;

  toggles.forEach((toggle, i) => {
    toggle.classList.toggle('slider__toggle--current', i === index);
  });

  currentSlide = index;
}

showSlide(currentSlide);

//  кнопка prev
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

// кнопка next
nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
});

// пагинация
toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    showSlide(index);
  });
});
