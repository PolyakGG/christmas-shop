// Установка даты
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

// Обновление каждую секунду.
const interval = setInterval(function() {
    // Текущее время
    const currentTime = new Date().getTime();

    // Разница между нг и текущей датой.
    const timeLeft = targetDate - currentTime;

    // Формула дней/часов/мин/сек/
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Обновление элементов на сайте дней/часов/мин/сек/
    document.querySelector('.CtaTimerContainerText1').textContent = days;
    document.querySelector('.CtaTimerContainerText3').textContent = hours;
    document.querySelector('.CtaTimerContainerText4').textContent = minutes;
    document.querySelector('.CtaTimerContainerText5').textContent = seconds;

    // Если меньше нуля то выводить "Happy New Year!"
    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector('.CtaTimer').textContent = "Happy New Year!";
    }
}, 1000);
