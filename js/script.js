'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//* 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// document.querySelector(".promo__adv").remove();
const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");
adv.forEach(item => item.remove());

//* 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = "Драма";

//* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//*    Реализовать только при помощи JS
poster.style.cssText = "background: url(../img/bg.jpg) center center/cover no-repeat";

//* 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//*    Отсортировать их по алфавиту
//* 5) Добавить нумерацию выведенных фильмов

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

// let j = 0;
// for (let i = 0; i < movieList.length; i++) {
//     for (j; j <= i; j++) {
//         movieList[i].innerHTML = `${i + 1}. ` + movieDB.movies[j];
//     }
// }

