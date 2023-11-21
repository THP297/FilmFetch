import  BasePage  from "../BasePage.js";
import SearchFetcher from "./SearchFetcher.js"
import BasePagination from "../../../../PageContent/BasePagination/BasePagination.js"

   class SearchController extends BasePage {

  constructor() {
    super();
  }


  setUp = async (movieName) => {
    this.showLoading();

    const searchFetcher = new SearchFetcher(this.api_key); 
    const basePagination = new BasePagination();
    basePagination.movie_genre = await searchFetcher.fetchData(movieName);

    this.hideLoading();

  }
}

export default SearchController;