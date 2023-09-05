'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films did you see?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films did you see?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', '');
    const b = prompt('How much would you rate it?', '');
  
    if (a === '' || b === '' || a === null || b === null || a.length > 50) {
      i--;
      console.log('error');
    } else {
      personalMovieDB.movies[a] = b;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log('Few films watched');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic spectator');
  } else if (personalMovieDB.count >= 30) {
    console.log('You are a cinephile');
  } else {
    console.log('error');
  }
  
}

// detectPersonalLevel();


function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  } else {
    return;
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres.push(prompt(`Your favorite genre is numbered ${i}`));
  }
}

writeYourGenres();