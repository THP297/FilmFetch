
class OverviewFrame {
    constructor(overview_button, vote) {
        this.overview_button = overview_button;
        this.vote = vote;
    }

    createOverviewFrame() {
        const overview_frame = document.createElement("div");
        overview_frame.classList.add("overview-frame");
        overview_frame.appendChild(this.overview_button);
        overview_frame.appendChild(this.vote);
        return overview_frame;
    }
}

export default OverviewFrame;