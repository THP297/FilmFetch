import MovieFrame from "../../main.js";

class RelatedMovies {
    constructor(id, related_movie) {
      this.id = id;
      this.related_movie = related_movie;
      this.MOVIES_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
      this.API_KEY = "846f16d2846b863d9986bcc6dbb1b6c2";
    }
  
    async fetchRelatedMovie(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  
    getRelatedMovieUrl() {
      var random_page = "&page=" + String(Math.floor(Math.random() * 500) + 1);
      let url =
        this.MOVIES_DETAIL_URL + String(this.id) + "/similar" + "?api_key=" + this.API_KEY + random_page;
      return url;
    }
  
    pushRelatedMoviePoster(element) {
      const movieFrame = new MovieFrame(element);
      const movieCol = movieFrame.createMovieFrame();
      this.related_movie.appendChild(movieCol);
    }
  
    get() {
      const url = this.getRelatedMovieUrl();
      this.fetchRelatedMovie(url).then((data) => {
        if (data.results.length == 0) {
          let related_movies = document.querySelector("#related_movies");
          related_movies.style.display = "none";
        }
        data.results.forEach((element) => {
          if (element.poster_path) {
            this.pushRelatedMoviePoster(element);
          }
        });
      });
    }
  }

  export default RelatedMovies;