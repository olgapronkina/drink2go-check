// Создаем слайдер
const slider = document.querySelector('.price-slider');
const minPriceInput = document.querySelector('.lowest-price');
const maxPriceInput = document.querySelector('.highest-price');

// Инициализация noUiSlider
noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
    min: 0,
    max: 99999,
  },
  tooltips: true, // показывать подсказки
  format: {
    to: function (value) {
      return Math.round(value); // округляем значения
    },
    from: function (value) {
      return Number(value);
    },
  },
});

// Привязка слайдера к полям ввода
slider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    minPriceInput.value = values[0];
  } else {
    maxPriceInput.value = values[1];
  }
});

// Привязка полей ввода к слайдеру
minPriceInput.addEventListener('change', function () {
  slider.noUiSlider.set([this.value, null]);
});
maxPriceInput.addEventListener('change', function () {
  slider.noUiSlider.set([null, this.value]);
});
