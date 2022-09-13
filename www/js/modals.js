function showModal (show) {  
    document.getElementById("modal-join-us").style.display=show?"grid":"none";
}

document.querySelector("#modal-join-us .close-cross-btn").addEventListener("click",()=>showModal(0))

document.getElementById("join-to-club").addEventListener("click",()=>showModal(1))

document.getElementById("modal-join-us").addEventListener("click",(e) => e.target===document.getElementById("modal-join-us")?showModal(0):{})

document.getElementById("joinToClubForm").addEventListener("submit",sendJoinToClubFormHandler);//Обработчик события отправки формы

function sendJoinToClubFormHandler (e) {//Функция обработки отправки формы
    e.preventDefault();//Останавливаем действие по умолчанию, то есть отправку формы на сервер.

    let request = new XMLHttpRequest();//Создаем объект для Ajax-запроса
    request.open(this.method, this.action, true);//Инициализируем запрос

    request.onreadystatechange = function() {//Пишем обработчик ответа сервера
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {//Если статус ответа сервера успешный, то выполнится код внутри фигурных скобок
            console.log(this.response);
        }
    }

    let data = new FormData(this);//Записываем в переменную data данные формы.

    request.send(data);//Отправляем запрос на сервер
}