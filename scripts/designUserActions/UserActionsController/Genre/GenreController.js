import BasePage from "../BasePage.js";
import GenreFetcher from "./GenreFetcher.js";
import BasePagination from "../../ObserverPagination/BasePagination.js";
import DerivedButtonCondition from "../../ObserverPagination/DerivedButtonCondition.js";
import DerivedButtonEvents from "../../ObserverPagination/DerivedButtonEvents.js";

  class GenreController extends BasePage {
  constructor() {
    super();
  }

  setUp = async (id) => {
    this.showLoading();
    const genreFetcher = new GenreFetcher(this.baseUrl,this.api_key);
    const basePagination = new BasePagination();
    const derivedButtonCondition = new DerivedButtonCondition();
    const derivedButtonEvents = new DerivedButtonEvents();

    basePagination.addObserver(derivedButtonCondition);
    basePagination.addObserver(derivedButtonEvents);


    basePagination.movie_genre = await genreFetcher.fetchData(id);

    this.hideLoading();
  }
}

  
  export default GenreController;
  