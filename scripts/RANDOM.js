import { create_movie_frame, DefinePoster, IMG_URL } from "./common_func.js";

function RANDOM() {
  const API_KEY = "?api_key=846f16d2846b863d9986bcc6dbb1b6c2";
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const MOVIES_DETAIL = "https://api.themoviedb.org/3/movie/";
  var RANDOM = document.querySelector("#random_row");

  async function getRandomMovie() {
    try {
      var random_page = "&page=" + String(Math.floor(Math.random() * 500) + 1);
      let discover_url = BASE_URL + API_KEY + random_page;
      const response = await fetch(discover_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getRandomMovie().then((data) => {
    data.results.slice(0, 12).forEach((element) => {
      getRandomPoster(element.id, RANDOM);
    });
  });

  function getRandomPoster(movieId, category) {
    let movie_detail_url = MOVIES_DETAIL + String(movieId) + API_KEY;
    fetch(movie_detail_url)
      .then((res) => res.json())
      .then((data) => {
        const movieCol = create_movie_frame(data);
        category.appendChild(movieCol);
      });
  }
}

export { RANDOM };
