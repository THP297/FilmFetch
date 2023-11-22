class GenreFetcher{

  constructor(baseUrl, api_key){
    this.baseUrl = baseUrl;
    this.api_key = api_key;
  }
    fetchData = async (genreId) =>{
        try {
          const response = await fetch(`${this.baseUrl}?api_key=${this.api_key}&with_genres=${genreId}`);
          const data = await response.json();
      
          if (data.results) {
            return data.results;
          } else {
            console.error('Error fetching movies:', data.status_message);
          }
        } catch (error) {
          console.error('Error fetching movies:', error.message);
        }
      }
}

export default GenreFetcher;