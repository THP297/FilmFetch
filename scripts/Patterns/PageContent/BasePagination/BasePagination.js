import DerivedButtonEvents from "../Observers/DerivedButtonEvents.js";
import DerivedButtonUpdate from "../Observers/DerivedButtonUpdate.js";
import { handleInFirstPage, initializeButton } from "../../../../helper/littleFunctions.js";
import MovieFrame from "../../../MovieFrame/main.js";

import Subject from "../Subject.js";

class BasePagination extends Subject {
  constructor() {
    super();
    this._movie_genre = [];
    this.currentPage = 1;
    this.page_length = 0;
    this.genreFrame = document.querySelector(".genre-frame");
    this.input_page = document.querySelector("#input-page");
    this.rangeButtonPage = document.querySelector("#range-button-page");
    this.lastButton = document.querySelector("#last-button");

    this.firstButton = initializeButton("#first-button", "1");
    this.prevButton = initializeButton("#prev-button", "Prev", true);
    this.nextButton = initializeButton("#next-button", "Next");
  }
  //getter
  get movie_genre() {
    return this._movie_genre;
  }
  //setter
  set movie_genre(new_movie_genre) {
    this._movie_genre = new_movie_genre;
    //notify to observer which update the button events when movie_genre changed
    this.notifyObservers([ new DerivedButtonEvents]);
    this.run();
  }

  updateButtons() {
    handleInFirstPage(this.currentPage, this.page_length, this.firstButton, this.prevButton, this.nextButton);
    // notify to observer which update the buttons state
    this.notifyObservers([new DerivedButtonUpdate]);
  }

  updateMovies() {
    const start = (this.currentPage - 1) * 18;
    const end = this.currentPage * 18;
    const movies_per_page = this.movie_genre.slice(start, end);
    this.genreFrame.innerHTML = "";
    movies_per_page.forEach((movie) => {
      // call MovieFrame class to create movie frame
      const movieFrame = new MovieFrame(movie);
      const movieCol = movieFrame.createMovieFrame();
      this.genreFrame.appendChild(movieCol);
    });
  }

  run() {
    this.updateMovies();
    this.updateButtons();
  }
}

export default BasePagination;
