class Vote {
    constructor(element) {
        this.element = element;
    }

    createVote() {
        const vote = document.createElement("p");
        vote.textContent = "Rate: " + this.element.vote_average;
        vote.setAttribute("id", "rating");
        return vote;
    }
}

export default Vote;