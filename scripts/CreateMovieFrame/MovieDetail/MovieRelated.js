import RelatedMovies from "./RelatedMovies/main.js";

class MovieRelated {
    constructor(element) {
        this.element = element;
    }

    setRelated() {
        const RELATED = document.querySelector(".related-row-1");
        const relatedMovies = new RelatedMovies(this.element.id, RELATED);
        relatedMovies.get()
    }
}

export default MovieRelated;