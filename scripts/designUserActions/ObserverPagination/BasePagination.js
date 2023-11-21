import { create_movie_frame } from "../../../helper/common_func.js";
import DerivedButtonEvents from "./DerivedButtonEvents.js";
import DerivedButtonUpdate from "./DerivedButtonUpdate.js";

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(ObserversToNotify) {
    ObserversToNotify.forEach(observer => observer.update(this));
  }
}

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

    this.firstButton = this.initializeButton("#first-button", "1");
    this.prevButton = this.initializeButton("#prev-button", "Prev", true);
    this.nextButton = this.initializeButton("#next-button", "Next");
  }

  initializeButton(selector, innerHTML, isDisabled = false) {
    const button = document.querySelector(selector);
    button.innerHTML = innerHTML;
    button.disabled = isDisabled;
    return button;
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
    const isNotFirstPage = this.currentPage > 1;
    const isNotLastPage = this.currentPage < this.page_length;
    const isThirdPageOrMore = this.currentPage >= 3;

    this.firstButton.style.display = isNotFirstPage ? "inline" : "none";
    this.firstButton.style.opacity = isThirdPageOrMore ? "1" : "0";
    this.prevButton.disabled = !isNotFirstPage;
    this.nextButton.disabled = !isNotLastPage;

    this.notifyObservers([new DerivedButtonUpdate])
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
