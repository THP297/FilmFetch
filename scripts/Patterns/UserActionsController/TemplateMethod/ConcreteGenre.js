import UserActionsController, { genres } from "../UserActionsController.js";
import GenreController from "./BasePage/Genre/GenreController.js";


class ConcreteGenre extends UserActionsController{

    constructor(){
        super();
        this.movieId;
    }

    fetchMovies = (id) =>{
        const genreController = new GenreController();
        genreController.setUp(id);
    }

    addUserEvent = () =>{
        const items = document.querySelectorAll(".category");
        items.forEach((item) => {
        item.addEventListener("click", (e) => {
            this.movieId = e.target.id;
            this.replaceContent("templates/genres.html",e.target.innerHTML,this.movieId);
        });
        });
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

}

export default ConcreteGenre;