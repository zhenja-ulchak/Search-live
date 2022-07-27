window.onload = () => { // перевірити чи дум дерево подгрузилось
    const input = document.querySelector('#input') //вибираєм інпут
    input.oninput = function() { // зазначаєм інпуту собитіє
        const value = this.value.trim(); // вибираєм значення і обрізаєм його
        const list = document.querySelectorAll('.ul li '); // виборка всіх лішок


        if (value != '') { // пере6віряєм на фолс
            list.forEach(elem => { // перебираєм кожен елемент
                if (elem.innerText.search(value) == -1) { //  шукаєм значення та перевіряєм через зрівнювання
                    elem.classList.add('hide'); // добавляєм клас
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide'); //  убираєм клас
            });
        }

    }
}