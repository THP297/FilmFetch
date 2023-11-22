import MovieData from "./MovieData.js";
import MovieDescription from "./MovieDescription.js";
import MovieDetailsTemplate from "./MovieDetailTemplate.js";
import MovieImage from "./MovieImage.js";
import MovieRelated from "./MovieRelated.js";
import MovieVideo from "./MovieVideo.js";

class MovieDetail {
    constructor(element) {
        this.element = element;
    }

    create = async () => {
        const detailsTemplate = new MovieDetailsTemplate(this.element);
        await detailsTemplate.fetchMovieDetail();

        const image = new MovieImage(this.element);
        image.setImage();

        const description = new MovieDescription(this.element);
        description.setDesc();

        const related = new MovieRelated(this.element);
        related.setRelated();

        const data = new MovieData(this.element);
        await data.fetchMovieData();

        const video = new MovieVideo(this.element);
        await video.fetchMovieVideo();
    }
}

export default MovieDetail;