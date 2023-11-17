import PaginationButtonEvents from "./PaginationButtonEvents.js";
import { create_movie_frame} from "./common_func.js";


class Pagination extends PaginationButtonEvents{
    constructor(){
      super();
        
      this.currentPage = 1;
      this.activeButtonId = 1;
      this.page_length = 0;
      this.movie_genre = null;
      this.GENRES = document.querySelector(".genre-frame");
      
      this.input_page = document.querySelector("#input-page");
      this.input_page.setAttribute("placeholder", ".../" + String(this.page_length));
  
      this.rangeButtonPage = document.querySelector("#range-button-page");
      this.firstButton = document.querySelector("#first-button");
      this.firstButton.innerHTML = "1";
  
      this.lastButton = document.querySelector("#last-button");
      this.lastButton.innerHTML = this.page_length;
  
      this.prevButton = document.querySelector("#prev-button");
      this.prevButton.innerHTML = "Prev";
      this.prevButton.disabled = true; // disable the previous button on page 1
  
      this.nextButton = document.querySelector("#next-button");
      this.nextButton.innerHTML = "Next";

    }
  
    updatePage = (currentPage) => {
      const start = (currentPage - 1) * 18;
      const end = currentPage * 18;
      const movies_per_page = this.movie_genre.slice(start, end);
      this.GENRES.innerHTML = "";
      movies_per_page.forEach((movie) => {
        const movieCol = create_movie_frame(movie);
        this.GENRES.appendChild(movieCol);
      });
    }
  
    updateButtons = (currentPage) =>{
      if (currentPage >= 3) {
        this.firstButton.setAttribute("style", "opacity: 1;");
      } else {
        this.firstButton.setAttribute("style", "opacity: 0;");
      }

      if (currentPage <= 1) {
        this.prevButton.disabled = true;
      } else {
        this.prevButton.disabled = false;
      }
      if (currentPage == this.page_length)
      {
        this.nextButton.disabled = false;
      } else {
        this.nextButton.disabled = true;
      }
  
      while (this.rangeButtonPage.firstChild) {
        this.rangeButtonPage.removeChild(this.rangeButtonPage.firstChild);
      }
      
      for (let i = currentPage; i <= currentPage + 2; i++) {
  
        if (i > Math.ceil(this.movie_genre.length/18))
        {
          break;
        }
  
        const pageButton = document.createElement("button");
        pageButton.innerHTML = i;
        pageButton.id = i;
        if (this.currentPage === i) {
          pageButton.classList.add("active");
        }
        pageButton.addEventListener("click", () => {
          this.currentPage = i;
          this.handleInFirstPage(this.currentPage);
          this.updatePage(this.currentPage);
        });
        this.rangeButtonPage.appendChild(pageButton);
      }
    }
  
    handleInFirstPage = (currentPage) =>{
      // Check if it's not the first page
      if (currentPage > 1) {
        this.firstButton.style.display = "inline";  
        this.prevButton.disabled = false;           
      } else {
        this.firstButton.style.display = "none";    
        this.prevButton.disabled = true;            
      }
  
      this.updateButtons(currentPage);
  }
  }
  
export default Pagination;