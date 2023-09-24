'use strict';
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    this.count = +prompt('How much films did you see?', '');
  
    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('How much films did you see?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('One of the last movies you watched?', '').trim();
      const b = prompt('How much would you rate it?', '');
    
      if (a === '' || b === '' || a === null || b === null || a.length > 50) {
        i--;
        console.log('error');
      } else {
        personalMovieDB.movies[a] = b;
        console.log('done');
      }
    }
  },
  detectPersonalLevel: function() {
    if (this.count > 0 && this.count < 10) {
      console.log('Few films watched');
    } else if (this.count >= 10 && this.count < 30) {
      console.log('You are a classic spectator');
    } else if (this.count >= 30) {
      console.log('You are a cinephile');
    } else {
      console.log('error');
    }
  },
  writeYourGenres: function() {

    for (let i = 1; i < 4; i++) {
      let ask = prompt(`Your favorite genre is numbered ${i}`).toLowerCase();

      if (ask === null || ask === '') {
        i--;
        console.log('You wrote wrong data')
      }
      personalMovieDB.genres.push(ask);
    }

    this.genres.forEach((item, i) => {
      console.log(`Favorite genre #${i + 1} is ${item}`)
    })
  },
  showMyDB: function() {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    } else {
      return;
    }
  },
  toggleVisibleMyDB: function() {
    if (this.privat === false) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  }
}


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();