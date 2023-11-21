class SearchFetcher{
    constructor(api_key)
    {
        this.baseUrl = "https://api.themoviedb.org/3";
        this.api_key = api_key;
    }
    fetchData = async (movieName) =>  {
        let allResults = [];
      
        try {
          let page = 1;
          let totalPages = 1; // Initialize totalPages to a value greater than the starting page
      
          while (page <= totalPages) {
            const response = await fetch(
              `${this.baseUrl}/search/movie?api_key=${this.api_key}&query=${encodeURIComponent(movieName)}&page=${page}`
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

export default SearchFetcher;