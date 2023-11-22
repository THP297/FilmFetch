class MovieVideo {
    constructor(movieData) {
        this.movieData = movieData;
        this.MOVIES_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
        this.API_KEY = "846f16d2846b863d9986bcc6dbb1b6c2";

    }

    fetchMovieVideo = async () =>{
        const MOVIE_VIDEO_URL =
            this.MOVIES_DETAIL_URL + String(this.movieData.id) + "/videos" + "?api_key=" + this.API_KEY;
        return await fetch(MOVIE_VIDEO_URL)
            .then((response) => response.json())
            .then((vid) => this.setMovieVideo(vid));
    }

    setMovieVideo(vid) {
        let videoUrl = vid.results[0].key;
        let video = document.createElement("iframe");
        video.setAttribute(
            "src",
            "https://www.youtube.com/embed/" + videoUrl
        );
        const video_wrapper = document.querySelector("#video-wrapper");
        video_wrapper.appendChild(video);
    }
}

export default MovieVideo;