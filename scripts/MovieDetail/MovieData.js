class MovieData {
    constructor(movieData) {
        this.movieData = movieData;
        this.MOVIES_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
        this.API_KEY = "846f16d2846b863d9986bcc6dbb1b6c2";
    }

    fetchMovieData= async () => {
        let url = this.MOVIES_DETAIL_URL + String(this.movieData.id) + "?api_key=" + this.API_KEY;
        return await fetch(url)
            .then((res) => res.json())
            .then((data) => this.setMovieData(data));
    }

    setMovieData(data) {
        const companies = [];
        data.production_companies.forEach((e) => {
            companies.push(" " + e["name"]);
        });

        const list_of_data = [
            data.original_title,
            data.adult,
            data.vote_average,
            data.release_date,
            data.production_countries[0]["name"],
            data.spoken_languages[0]["name"],
            data.genres[0]["name"],
            companies,
        ];
        const data_desc = [
            "Movie Name:",
            "Adult:",
            "Rating:",
            "Release Date:",
            "Country:",
            "Language:",
            "Genres:",
            "Companies:",
        ];
        if (list_of_data.length == 0) {
            const content_section = document.querySelector(".content-section");
            content_section.style.height = "100vh";
        }
        list_of_data.forEach((e, index) => {
            const info = document.getElementById("watch_info");
            const info_row = document.createElement("tr");

            const data_desc_row = document.createElement("td");
            const data_strong = document.createElement("strong");
            data_desc_row.appendChild(data_strong);
            data_strong.innerHTML = data_desc[index];
            data_desc_row.appendChild(data_strong);
            info_row.appendChild(data_desc_row);

            const data_row = document.createElement("td");
            data_row.innerHTML = e;
            info_row.appendChild(data_row);
            info.appendChild(info_row);
        });
    }
}


export default MovieData;