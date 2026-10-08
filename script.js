// Переключение вкладок
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок и секций
        tabs.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Добавляем активный класс нажатой кнопке
        btn.classList.add('active');

        // Показываем нужную секцию
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
