import { create_movie_frame, DefinePoster, IMG_URL } from "./common_func.js";
async function UPCOMING() {
  const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming";
  const API_KEY = "?api_key=846f16d2846b863d9986bcc6dbb1b6c2";
  var UPCOMING = document.querySelector("#upcoming_row");

  async function getUPCOMINGMovie() {
    try {
      let movie_detail_url = UPCOMING_URL + API_KEY;
      const response = await fetch(movie_detail_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function getUPCOMINGPoster(category, element) {
    const movieCol = create_movie_frame(element);
    category.appendChild(movieCol);
  }

  const data = await getUPCOMINGMovie();
  const UPCOMING_row_1 = data.results.reverse().slice(0, 12);

  UPCOMING_row_1.forEach((element) => {
    getUPCOMINGPoster(UPCOMING, element);
  });
}
export { UPCOMING };
