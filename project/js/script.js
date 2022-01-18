/* eslint-disable no-use-before-define */

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

removeAdv();
fixGenre();
applyBackgoundImg();

/* *** */

function removeAdv() {
  const advImages = document.querySelectorAll('.promo__adv img');
  advImages.forEach((advImage) => advImage.remove());
}

function fixGenre() {
  const genreContainer = document.querySelector('.promo__genre');
  genreContainer.innerHTML = 'Драма';
}

function applyBackgoundImg() {
  const poster = document.querySelector('.promo__bg');
  poster.style.backgroundImage = 'url("./img/bg.jpg")';
}

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
   <li class="promo__interactive-item">${i + 1} ${film}
   <div class="delete"></div>
   </li>
`;
});
