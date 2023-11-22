let genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ]

class UserActionsController{

    templateMethod  =  () =>{
        this.addUserEvent();
    }
    //abstract method
    fetchMovies = (movieValue) => {}

    replaceContent = (htmlName, title, movieValue) =>{
    fetch(htmlName)
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const root_content = document.querySelector("#display-content");
      const genres_content = doc.querySelector("#display-content");
      root_content.innerHTML = genres_content.innerHTML;
      let genreTitle = document.querySelector("#genre-title");
      genreTitle.innerHTML = title;
      this.fetchMovies(movieValue)
    });
    }
    //abstract method
    addUserEvent = () => {} //addUser run -> replaceContent run -> fetchMovies

}


export default UserActionsController;
export {genres};
