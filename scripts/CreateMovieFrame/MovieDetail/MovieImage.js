class MovieImage {
    constructor(element) {
        this.element = element;
        this.IMG_URL = "https://image.tmdb.org/t/p/w500";
    }

    setImage() {
        const image = document.getElementById("watch_img");
        image.setAttribute("src", this.IMG_URL + this.element.poster_path);
    }
}

export default MovieImage;