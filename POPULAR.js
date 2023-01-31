import { create_movie_frame,DefinePoster,IMG_URL } from "./common_func.js"
async function POPULAR() {
    const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular"
    const API_KEY = '?api_key=846f16d2846b863d9986bcc6dbb1b6c2'
    var POPULAR = document.querySelector('.popular_row')

    async function getPopularMovie() {
        try {
            let movie_detail_url = POPULAR_URL + API_KEY
            const response = await fetch(movie_detail_url)
            const data = await response.json()
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function getPopularPoster(category, element) {
        const movieCol = create_movie_frame(element);
        category.appendChild(movieCol);
    }

    const data = await getPopularMovie();
    const popular_row_1 = data.results.slice(0, 12);

    popular_row_1.forEach(element => {
        getPopularPoster(POPULAR, element);
    });


}
export { POPULAR };