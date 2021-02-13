
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', []);
let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let OfFilms = prompt('Один из последних посмотренных фильмов', []);
let appraisal = prompt('На сколько оцените его?', []);
let OfFilms1 = prompt('Один из последних посмотренных фильмов', []);
let appraisal1 = prompt('На сколько оцените его?', []);

personalMoveDB.movies[OfFilms] = appraisal;
personalMoveDB.movies[OfFilms1] = appraisal1;

console.log(personalMoveDB);