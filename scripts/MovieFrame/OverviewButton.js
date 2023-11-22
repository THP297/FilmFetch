import MovieDetail from "../MovieDetail/main.js"
class OverviewButton {
    constructor(movieData) {
        this.movieData = movieData;
    }

    createOverviewButton(play_button) {
        const overview_button = document.createElement("button");
        overview_button.appendChild(play_button);
        const movieDetail = new MovieDetail(this.movieData);
        overview_button.onclick = async () =>  await movieDetail.create();
        return overview_button;
    }
}
export default OverviewButton;