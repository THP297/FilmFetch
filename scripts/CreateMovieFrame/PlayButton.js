class PlayButton {
    createPlayButton() {
        const play_button = document.createElement("img");
        play_button.setAttribute("src", "./images/play-button.png");
        play_button.setAttribute("id", "play-button");
        return play_button;
    }
}

export default PlayButton;