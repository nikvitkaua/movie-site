const numberOfFilms = prompt('How much films did you see?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

askUser();



function askUser() {
  const a = prompt('One of the last movies you watched?', '');
  const b = prompt('How much would you rate it?', '');

  personalMovieDB.movies[a] = b;
}



console.log(personalMovieDB);