class MovieDescription {
    constructor(movieData) {
        this.movieData = movieData;
    }

    setDesc() {
        const section_desc = document.querySelector("#section-desc");
        const desc = document.createElement("p");
        desc.textContent = this.movieData.overview;
        section_desc.appendChild(desc);
    }
}

export default MovieDescription;