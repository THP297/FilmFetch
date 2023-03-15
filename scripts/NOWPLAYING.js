import { create_movie_frame, DefinePoster, IMG_URL } from "./common_func.js";
async function NOWPLAYING() {
  const NOWPLAYING_URL = "https://api.themoviedb.org/3/movie/top_rated";
  const API_KEY = "?api_key=846f16d2846b863d9986bcc6dbb1b6c2";
  var NOWPLAYING = document.querySelector("#top_rated_row");

  async function getNOWPLAYINGMovie() {
    try {
      let movie_detail_url = NOWPLAYING_URL + API_KEY;
      const response = await fetch(movie_detail_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function getNOWPLAYINGPoster(category, element) {
    const movieCol = create_movie_frame(element);
    category.appendChild(movieCol);
  }

  const data = await getNOWPLAYINGMovie();
  const NOWPLAYING_row_1 = data.results.slice(0, 12);

  NOWPLAYING_row_1.forEach((element) => {
    getNOWPLAYINGPoster(NOWPLAYING, element);
  });
}
export { NOWPLAYING };
