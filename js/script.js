
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', []);

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', []);
    }
}

start();

let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};      

let num = 0;
function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let OfFilms = prompt('Один из последних посмотренных фильмов', []);
        let appraisal = prompt('На сколько оцените его?', []);
        if(OfFilms != '' && appraisal != '' && OfFilms != null && appraisal != null && OfFilms.length < 50){
            personalMoveDB.movies[OfFilms] = appraisal;
            console.log('test');
        }else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMoveDB.count < 10) {
        alert('Посмотрено довольно мало фильмов');
    }else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
        alert('Вы класический зритель');
    }else if (personalMoveDB.count >= 30) {
        alert('Вы киноман');
    }else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(hidden == false) {
        console.log(personalMoveDB);
    }
}

showMyDB(personalMoveDB.private);

function writeYourGeneres() {
    for(let i =1; i <= 3; i++){
        personalMoveDB.genres[i-1] = prompt('Ваш любимый жанр под номером ' + i);
    }
}

writeYourGeneres();

// console.log(personalMoveDB);