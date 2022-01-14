/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
export default () => {
  const personalMovieDB = {
    count: 0,
    movies: {}, // literal of Object
    actors: {},
    genres: [], // literal of Array
    privat: false, // Boolean
    start() { // method
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while (personalMovieDB.count === '' || personalMovieDB.count == null || Number.isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
    },
    rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных филмов?', '');
        const b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
        } else {
          console.log('error');
          i--;
        }
      }
    },
    detectPersonalLevel() {
      if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
      } else {
        console.log('Произошла ошибка');
      }
    },

    showMyDB(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    },
    writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if (genre === '' || genre === null) {
          console.log('Вы ввели некорректные данные или не ввели их вовсе');
          i--;
        } else {
          personalMovieDB.genres[i - 1] = genre;
        }
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    },
  };
  return personalMovieDB;
};
