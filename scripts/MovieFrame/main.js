import Poster from "./Poster.js"
import Vote from "./Vote.js";
import PlayButton from "./PlayButton.js";
import OverviewButton from "./OverviewButton.js";
import OverviewFrame from "./OverviewFrame.js";
import MovieCol from "./MovieCol.js";

class MovieFrame {
    constructor(movieData) {
        this.movieData = movieData;   
    }

    createMovieFrame() {
        const poster = new Poster(this.movieData);
        const vote = new Vote(this.movieData);
        const playButton = new PlayButton();
        const overviewButton = new OverviewButton(this.movieData);
        const overview_frame = new OverviewFrame(overviewButton.createOverviewButton(playButton.createPlayButton()), vote.createVote());

        const movie_frame = document.createElement("div");
        movie_frame.classList.add("movie-frame");
        const moviePoster = poster.createPoster();
        moviePoster.alt = `Poster for ${this.movieData.original_title}`;

        const movieTitle = document.createElement("p");
        movieTitle.setAttribute("id", "movie-title");
        movieTitle.textContent = this.movieData.original_title;

        movie_frame.appendChild(moviePoster);
        movie_frame.appendChild(overview_frame.createOverviewFrame());

        const movieCol = new MovieCol(movie_frame, movieTitle);
        return movieCol.createMovieCol();
    }
}



export default MovieFrame;