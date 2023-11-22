class MovieCol {
    constructor(movie_frame, movieTitle) {
        this.movie_frame = movie_frame;
        this.movieTitle = movieTitle;
    }

    createMovieCol() {
        const movieCol = document.createElement("div");
        movieCol.classList.add(
            "col-12",
            "col-xl-2",
            "col-lg-3",
            "col-md-3",
            "col-sm-4",
            "movie-col"
        );
        movieCol.appendChild(this.movie_frame);
        movieCol.appendChild(this.movieTitle);
        return movieCol;
    }
}

export default MovieCol;