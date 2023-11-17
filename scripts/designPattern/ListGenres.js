import GenrePage from "./GenrePage.js";

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

class ListGenres{
  constructor()
  {
  }

  setUpResponsiveGenres =() => {
    var genres_item = document.querySelector("#list-group");
    genres.forEach((element) => {
      var item = document.createElement("a");
      item.setAttribute("class", "category");
      item.setAttribute("href", "#");
      item.setAttribute("id", element.id);
      item.innerHTML = element.name;
      var itemWrapper = document.createElement("div");
      itemWrapper.setAttribute("class", "col-6 col-xl-3 col-md-4 col-sm-6");
      itemWrapper.setAttribute("id", "wrapperLink");
      itemWrapper.appendChild(item);
      genres_item.appendChild(itemWrapper);
    });
  }


  useGenreTemplate = ( id, genre_title) => {
    fetch("genres.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const root_content = document.querySelector("#display-content");
        const genres_content = doc.querySelector("#display-content");
        root_content.innerHTML = genres_content.innerHTML;
        let genreTitle = document.querySelector("#genre-title");
        genreTitle.innerHTML = genre_title;
        const genrePage =  new GenrePage();
        genrePage.setUp(id);
      });
  }
  
  getGenreId = () => {
    const items = document.querySelectorAll(".category");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.useGenreTemplate(e.target.id,e.target.innerHTML);
      });
    });
  }

  setGenreTemplate()
  {
    this.getGenreId();
  }

}

export default ListGenres;