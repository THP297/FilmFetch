import MovieData from "./MovieData.js";
import MovieDescription from "./MovieDescription.js";
import MovieDetailsTemplate from "./MovieDetailTemplate.js";
import MovieImage from "./MovieImage.js";
import MovieRelated from "./MovieRelated.js";
import MovieVideo from "./MovieVideo.js";

class MovieDetail {
    constructor(movieData) {
        this.movieData = movieData;
    }

    create = async () => {
        const detailsTemplate = new MovieDetailsTemplate();
        await detailsTemplate.fetchMovieDetail();

        const image = new MovieImage(this.movieData);
        image.setImage();

        const description = new MovieDescription(this.movieData);
        description.setDesc();

        const related = new MovieRelated(this.movieData);
        related.setRelated();

        const data = new MovieData(this.movieData);
        await data.fetchMovieData();

        const video = new MovieVideo(this.movieData);
        await video.fetchMovieVideo();
    }
}

export default MovieDetail;