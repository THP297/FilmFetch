import BasePage from "./BasePage.js";


  class GenrePage extends BasePage {
  constructor() {
    super();
  }

  fetchGenrePage = async (genreId) =>{
    try {
      const response = await fetch(`${this.baseUrl}?api_key=${this.api_key}&with_genres=${genreId}`);
      const data = await response.json();
  
      if (data.results) {
        console.log(`Movies with Genre ID ${genreId} :`, data.results);
        return data.results;
      } else {
        console.error('Error fetching movies:', data.status_message);
      }
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  }


  fetchData = async(id) =>{

    const resultsPage1 = await this.fetchGenrePage(id);
    console.log(resultsPage1);
    return resultsPage1;
  }
  setPageLength = (movie_genre)=>{
    this.page_length = Math.ceil(movie_genre.length / 18);
  }

  setUp = async (id) => {
    this.showLoading();
    this.movie_genre = await this.fetchData(id);
    this.setPageLength(this.movie_genre);
    this.hideLoading();
    this.addButtonEvents();
  }
}

  
  export default GenrePage;
  