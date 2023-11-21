import UserActionsController from "../UserActionsController.js";
import SearchController from "./BasePage/Search/SearchController.js"
class ConcreteSearch extends UserActionsController {
    constructor(){
        super();
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
        this.value = lowerCaseValue;
        this.replaceContent("search.html", this.value);
        });

        const search = document.querySelector("#search");
        search.addEventListener("keyup",() => {
            if (event.keyCode === 13) {
                this.value =  search.value.toLowerCase();
                this.replaceContent("search.html",this.value);
            }
        });

    }

}

export default ConcreteSearch;