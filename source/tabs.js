const tabs = () => {
    // 1. Функция таба
    function tabsDo({
        // Родитель табов (кнопок, активирующих показ
        //     соответствующего контента)
        ParentSliderSelector,
        // Сам таб (кнопка, ссылка, изображение)
        tabsSelector, 
        // Контент, показываемый при нажатии на соответ.
        // таб 
        contentSelector,
        // Класс активности, присваиваемый к табу при нажат.
        // на него
        activeСlass,
        
    }) {    // Родитель табов (кнопок, активирующих показ
            //     соответствующего контента)
        const header = document.querySelector(ParentSliderSelector),
            // Сам таб
            tabs = document.querySelectorAll(tabsSelector),
            // Блок контента, который показывается при нажатии
            // на таб
            content = document.querySelectorAll(contentSelector);
        // Скрытие всего контента и удаление класса
        // активности со всех ссылок табов по умоланию
        function hideTab() {
            content.forEach(content => {
                content.classList.add('hide');
                content.classList.remove('show');
            });    
            
            tabs.forEach(tab => {
                tab.classList.remove(activeСlass);                
            });
        }

        // При нажатии на таб его индекс присваивается к 
        // соответствующему контенту, который будет показываться.
        function showTab(i = 0) {
            content[i].classList.add('show');
            content[i].classList.remove('hide');
            tabs[i].classList.add(activeСlass);
        }
        hideTab();
        showTab();       
            
        // // header - облочка кнопок (изображение и ссылки)
        // e.target.matches(tabsSelector) делегирование дочерний элемент - изображение
        // e.target.parentNode.matches(tabsSelector) делегирование на
        //  дочерний дочернего элемента - ссылку
        header.addEventListener('click', (e) => {
            if (e.target && (e.target.matches(tabsSelector) ||
                    e.target.parentNode.matches(tabsSelector))) {
                tabs.forEach((tab, i) => {
                    if (e.target == tab || e.target.parentNode == tab) {
                        hideTab();
                        showTab(i);
                    }                    
                });
            }
        });
    }

    // 2. Вызов функции таба
    // ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ 
    tabsDo({
        ParentSliderSelector: '.glazing_slider',
        tabsSelector: '.glazing_block',       
        contentSelector: '.glazing_content',
    });
    // 2. Вызов функции таба 
    // ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!
    tabsDo({
        ParentSliderSelector: '.decoration_slider',
        tabsSelector: '.no_click',
        contentSelector: '.tab__content',
        activeСlass: "after_click",
    });
    // 2. Вызов функции таба 
    // Калькулятор
    tabsDo({
        ParentSliderSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeСlass: "do_image_more",
    });
};


export default tabs;