// JavaScript для управления музыкой
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    // Пытаемся автоматически запустить музыку
    function tryAutoplay() {
        bgMusic.play().then(function() {
            console.log("Музыка успешно запущена автоматически");
            musicToggle.textContent = "🔊 Музыка ВКЛ";
        }).catch(function(error) {
            console.log("Автозапуск заблокирован браузером. Нажмите кнопку для включения.");
            musicToggle.textContent = "▶️ Включить музыку";
        });
    }
    
    // Попробуем запустить при загрузке
    tryAutoplay();
    
    // Обработчик для кнопки переключения музыки
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().then(function() {
                musicToggle.textContent = "🔊 Музыка ВКЛ";
            }).catch(function(error) {
                console.log("Ошибка воспроизведения:", error);
                musicToggle.textContent = "❌ Ошибка";
            });
        } else {
            bgMusic.pause();
            musicToggle.textContent = "🔇 Музыка ВЫКЛ";
        }
    });
    
    // Обновляем текст кнопки в зависимости от состояния музыки
    bgMusic.addEventListener('play', function() {
        musicToggle.textContent = "🔊 Музыка ВКЛ";
    });
    
    bgMusic.addEventListener('pause', function() {
        musicToggle.textContent = "🔇 Музыка ВЫКЛ";
    });
    
    // Обработка ошибок воспроизведения
    bgMusic.addEventListener('error', function() {
        console.error("Ошибка загрузки аудио файла");
        musicToggle.textContent = "❌ Ошибка загрузки";
        musicToggle.disabled = true;
        musicToggle.style.backgroundColor = "#666";
    });
});
