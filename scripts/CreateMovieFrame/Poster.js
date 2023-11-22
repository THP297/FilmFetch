class Poster {
    constructor(element) {
        this.element = element;
        this.IMG_URL = "https://image.tmdb.org/t/p/w500";
    }

    createPoster() {
        var item = document.createElement("img");
        item.setAttribute("src", this.IMG_URL + this.element.poster_path);
        item.setAttribute("class", "image-item");
        return item;
    }
}

export default Poster;