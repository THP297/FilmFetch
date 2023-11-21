import { create_movie_frame } from "../../../../helper/common_func.js";
import DerivedButtonEvents from "../Observers/DerivedButtonEvents.js";
import DerivedButtonUpdate from "../Observers/DerivedButtonUpdate.js";
import { handleInFirstPage, initializeButton } from "../../../../helper/littleFunctions.js";
import Subject from "../Subject.js";

class BasePagination extends Subject {
  constructor() {
    super();
    this._movie_genre = null;
    this.currentPage = 1;
    this.page_length = 0;
    this.GENRES = document.querySelector(".genre-frame");
    this.input_page = document.querySelector("#input-page");
    this.rangeButtonPage = document.querySelector("#range-button-page");
    this.lastButton = document.querySelector("#last-button");

    this.firstButton = initializeButton("#first-button", "1");
    this.prevButton = initializeButton("#prev-button", "Prev", true);
    this.nextButton = initializeButton("#next-button", "Next");
  }

  get movie_genre() {
    return this._movie_genre;
  }

  set movie_genre(new_movie_genre) {
    this._movie_genre = new_movie_genre;
    this.notifyObservers([ new DerivedButtonEvents]);
    this.run();
  }

  handleInFirstPage() {
    handleInFirstPage(this.currentPage, this.page_length, this.firstButton, this.prevButton, this.nextButton);
    this.notifyObservers([new DerivedButtonUpdate]);
  }

  updateMovies() {
    const start = (this.currentPage - 1) * 18;
    const end = this.currentPage * 18;
    const movies_per_page = this.movie_genre.slice(start, end);
    this.GENRES.innerHTML = "";
    movies_per_page.forEach((movie) => {
      const movieCol = create_movie_frame(movie);
      this.GENRES.appendChild(movieCol);
    });
  }

  run() {
    this.updateMovies();
    this.handleInFirstPage();
  }
}

export default BasePagination;
