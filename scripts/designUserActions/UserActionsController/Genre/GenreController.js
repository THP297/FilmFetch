import BasePage from "../BasePage.js";
import GenreFetcher from "./GenreFetcher.js";
import BasePagination from "../../ObserverPagination/BasePagination.js";

  class GenreController extends BasePage {
  constructor() {
    super();
  }

  setUp = async (id) => {
    this.showLoading();
    const genreFetcher = new GenreFetcher(this.baseUrl,this.api_key);
    const basePagination = new BasePagination();
    basePagination.movie_genre = await genreFetcher.fetchData(id);

    this.hideLoading();
  }
}

  
  export default GenreController;
  