'use strict';

const numberOfFilms = +prompt('How much films did you see?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}


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


if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  console.log('Few films watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a classic spectator');
} else if (personalMovieDB.count >= 30) {
  console.log('You are a cinephile');
} else {
  console.log('error');
}



console.log(personalMovieDB);