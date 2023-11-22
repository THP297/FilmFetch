class Vote {
    constructor(movieData) {
        this.movieData = movieData;
    }

    createVote() {
        const vote = document.createElement("p");
        vote.textContent = "Rate: " + this.movieData.vote_average;
        vote.setAttribute("id", "rating");
        return vote;
    }
}

export default Vote;