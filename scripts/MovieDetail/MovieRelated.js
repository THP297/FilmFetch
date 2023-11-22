import RelatedMovies from "./RelatedMovies/main.js";

class MovieRelated {
    constructor(movieData) {
        this.movieData = movieData;
    }

    setRelated() {
        const RELATED = document.querySelector(".related-row-1");
        const relatedMovies = new RelatedMovies(this.movieData.id, RELATED);
        relatedMovies.get()
    }
}

export default MovieRelated;