'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll(".promo__adv img"),
          poster = document.querySelector(".promo__bg"),
          genre = poster.querySelector(".promo__genre"),
          movieList = document.querySelector(".promo__interactive-list"),
          input = document.querySelector(".adding__input"),
          button = document.querySelector("button"),
          checkbox = button.previousElementSibling.previousElementSibling;
    
    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };
    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.cssText = "background: url(../img/bg.jpg) center center/cover no-repeat";
    };
    const sortArr = (arr) => {
        arr.sort();
    };
    const binEvent = (callbackInner) => {
        const bin = document.querySelectorAll(".delete");
        bin.forEach((item, index) => {
            item.addEventListener("click", () => {
                movieDB.movies.splice(index, 1);
                callbackInner();
            });
        });
    };
    const sortAndAdd = () => {
        movieList.innerHTML = "";
        sortArr(movieDB.movies);
        movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        binEvent(sortAndAdd);
    };
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (input.value === "") {
            input.placeholder = "Введите название фильма";
            return;
        } else if(input.value.length > 21) {
            input.value = input.value.slice(0, 21) + "...";
        }
        movieDB.movies.push(input.value);
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }
        input.value = "";
        checkbox.checked = false;
        sortAndAdd();
    });
    deleteAdv(adv);
    makeChanges();
    sortAndAdd();
});