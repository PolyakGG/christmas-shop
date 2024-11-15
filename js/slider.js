window.addEventListener('load', function() {
    // Инициализация элементов слайдера
    const slider = document.querySelector('.Slider2');
    const sliderImages = document.querySelectorAll('.SliderImageContainer, .SliderImageContainer2, .SliderImageTreeBall, .SliderImageContainer4');
    const sliderLength = sliderImages.length;
    let currentIndex = 0;

    // Кнопки
    const leftButton = document.querySelector('.SliderArrowLeft');
    const rightButton = document.querySelector('.SliderArrowRight');

    // Функция для обновления положения слайдера
    function updateSliderPosition() {
        const offset = -currentIndex * 220; // 220px = ширина изображения + отступ
        slider.style.transform = `translateX(${offset}px)`;
    }

    // Событие для кнопки влево
    leftButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sliderLength - 1; // Возврат к последнему элементу
        }
        updateSliderPosition();
    });

    // Событие для кнопки вправо
    rightButton.addEventListener('click', function() {
        if (currentIndex < sliderLength - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возврат к первому элементу
        }
        updateSliderPosition();
    });

    // Инициализация стилей для контейнеров и изображений
    const imageContainers = document.querySelectorAll('.SliderImageContainer, .SliderImageContainer2, .SliderImageTreeBall, .SliderImageContainer4');
    imageContainers.forEach(function(container) {
        container.style.width = '200px';
        container.style.height = '200px';
        container.style.overflow = 'hidden';
        container.style.borderRadius = '20px';
    });

    const images = document.querySelectorAll('.SliderSnowman, .SliderChristmasTree, .ImageTreeBall, .SliderFairyTail');
    images.forEach(function(image) {
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'cover';
        image.style.display = 'block';
    });
});
