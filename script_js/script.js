// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const spinButtons = Array.from(slider.querySelectorAll('.spin_button'))
const wheels = Array.from(slider.querySelectorAll('.wheel'));
const slideCount = wheels.length;
let slideIndex = 0;

// Для колеса
let rand = Math.ceil(Math.random() * 360);
let rotateValue = rand + 1800;

// Кнопки вращения 
spinButtons.forEach((spinButton, index) => {
    spinButton.setAttribute('onclick', 'rotate_button(' + index + ')')
});

function rotate_button(index) {
    spinButtons[index].setAttribute('style', 'transform: rotate(' + rotateValue + 'deg)')
    rand = Math.ceil(Math.random() * 360);
    rotateValue += rand + 1800;
}

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    wheels.forEach((wheel, index) => {
    if (index === slideIndex) {
        wheel.style.display = 'block';
        spinButtons[index].style.display = 'flex';
    } else {
        wheel.style.display = 'none';
        spinButtons[index].style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();