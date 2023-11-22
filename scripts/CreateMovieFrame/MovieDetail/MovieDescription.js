class MovieDescription {
    constructor(element) {
        this.element = element;
    }

    setDesc() {
        const section_desc = document.querySelector("#section-desc");
        const desc = document.createElement("p");
        desc.textContent = this.element.overview;
        section_desc.appendChild(desc);
    }
}

export default MovieDescription;