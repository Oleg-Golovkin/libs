function postForms(form, setWindowOptions) {

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };


    // 1. На каждую форму вешаем обработчик события.
    // с событием submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // НЕ ОБЯЗАТЕЛЬНЫЙ БЛОК
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);
        // 1.1. Информация, введенная форму, собирается
        // в специальном объекте new FormData(form)
        const formData = new FormData(form);
        if (form.getAttribute('data-calck') == "end") {
            for (let key in setWindowOptions) {
                formData.append(key, setWindowOptions[key]);
            }
        }

        // 1.2. Отправляем данные на сервер. Выполняется функция
        // post, тело которой описано в пункте п. 1.3       
        post("assets/server.php", formData)
            // 1.4.  Можем проверить, ушли ли инф. на сервер.
            // Через Promise
            // При положительном варианте событий при повторном
            // обращении к .then можем выполнять действия
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                form.reset();
                setTimeout(function () {
                    statusMessage.remove();
                    console.log("JR");
                    document.querySelectorAll('[data-modals]').forEach(modal => {
                        modal.classList.remove('show');
                    });
                    document.body.style.overflow = "";                   
                }, 2000);
            });
    });

    // 1.3. Настраиваем механизм отправки данных на сервер
    // async - чтобы функция выполнилась после получения данных
    // с сервера.
    // Вместо url в пункте 1.2. подставится адрес
    // Вместо request в пункте 1.2. подставится то, что
    // будем отправлять на сервер - new FormData(form)
    const post = async function (url, request) {
        let res = await fetch(url, {
            method: "POST",
            // отправляем информацию на сервер
            body: request
        });
        // Возвращаем полученный ответ от сервера о том, что
        // информация отправлена .then или нет .catch
        return await res.text();
    };
}

export default postForms;