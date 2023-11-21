import  BasePage  from "../BasePage.js";
import SearchFetcher from "./SearchFetcher.js"
import BasePagination from "../../ObserverPagination/BasePagination.js";
import DerivedButtonCondition from "../../ObserverPagination/DerivedButtonCondition.js";
import DerivedButtonEvents from "../../ObserverPagination/DerivedButtonEvents.js";

   class SearchController extends BasePage {

  constructor() {
    super();
  }


  setUp = async (movieName) => {
    this.showLoading();

    const searchFetcher = new SearchFetcher(this.api_key); 
    const basePagination = new BasePagination();
    const derivedButtonCondition = new DerivedButtonCondition();
    const derivedButtonEvents = new DerivedButtonEvents();

    basePagination.addObserver(derivedButtonCondition);
    basePagination.addObserver(derivedButtonEvents);
    
    basePagination.movie_genre = await searchFetcher.fetchData(movieName);

    this.hideLoading();

  }
}

export default SearchController;