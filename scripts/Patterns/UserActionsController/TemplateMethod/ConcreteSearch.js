import UserActionsController from "../UserActionsController.js";
import SearchController from "./BasePage/Search/SearchController.js"
class ConcreteSearch extends UserActionsController {
    constructor(){
        super();
        this.movieName;
    }

    fetchMovies = (movieName) =>{
        const searchController = new SearchController();
        searchController.setUp(movieName);
    }

    addUserEvent = () =>{

        const search_btn = document.querySelector("#searchBtn");
        search_btn.addEventListener("click", () => {
        const input_value = document.querySelector("#search");
        const lowerCaseValue = input_value.value.toLowerCase();
        this.movieName = lowerCaseValue;
        this.replaceContent("templates/search.html", this.movieName,this.movieName);
        });

        const search = document.querySelector("#search");
        search.addEventListener("keyup",(event) => {
            if (event.keyCode === 13) {
                this.movieName =  search.value.toLowerCase();
                this.replaceContent("templates/search.html",this.movieName,this.movieName);
            }
        });

    }

}

export default ConcreteSearch;