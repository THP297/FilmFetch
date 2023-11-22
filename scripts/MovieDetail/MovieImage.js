class MovieImage {
    constructor(movieData) {
        this.movieData = movieData;
        this.IMG_URL = "https://image.tmdb.org/t/p/w500";
    }

    setImage() {
        const image = document.getElementById("watch_img");
        image.setAttribute("src", this.IMG_URL + this.movieData.poster_path);
    }
}

export default MovieImage;