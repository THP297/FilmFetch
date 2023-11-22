class MovieDetailsTemplate {

    fetchMovieDetail = async() => {
        return await fetch("templates/movie_detail.html")
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const index_content = document.querySelector("body");
                const watch_content = doc.querySelector("body");
                index_content.innerHTML = watch_content.innerHTML;
            });
    }
}

export default MovieDetailsTemplate;