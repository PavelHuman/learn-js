console.log(1);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', ''); 

const personelMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personelMovieDB.movies[a] = b;
personelMovieDB.movies[c] = d;

console. log(personelMovieDB);



