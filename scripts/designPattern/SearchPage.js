import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  
  constructor() {
    super();
  }

  searchMovieByName = async (movieName) =>  {
    let allResults = [];
  
    try {
      let page = 1;
      let totalPages = 1; // Initialize totalPages to a value greater than the starting page
  
      while (page <= totalPages) {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&page=${page}`
        );
        const data = await response.json();
  
        if (data.results && data.results.length > 0) {
          allResults = allResults.concat(data.results);
          totalPages = data.total_pages;
          console.log(totalPages);
          page++;
        } else {
          console.error('No results found.');
          break; 
        }
      }
      console.log('All search results:', allResults);
      return allResults;
    } catch (error) {
      console.error('Error searching for movies:', error.message);
      return [];
    }
  }
}