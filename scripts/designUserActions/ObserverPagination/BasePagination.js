import { create_movie_frame} from "../../../helper/common_func.js";

class Subject {
  constructor()
  {
    this.observers = [];
  }
  addObserver(observer){
    this.observers.push(observer);
  }
  notifyObservers(){
    this.observers.forEach(observer => observer.update(this));
  }
}


class BasePagination extends Subject{
    constructor(){
      super()

      this._movie_genre = null;
      this.currentPage = 1;
      this.activeButtonId = 1;
      this.page_length = 0;
      this.GENRES = document.querySelector(".genre-frame");
      
      this.input_page = document.querySelector("#input-page");
  
      this.rangeButtonPage = document.querySelector("#range-button-page");
      this.firstButton = document.querySelector("#first-button"); 
      this.firstButton.innerHTML = "1";
  
      this.lastButton = document.querySelector("#last-button");

  
      this.prevButton = document.querySelector("#prev-button");
      this.prevButton.innerHTML = "Prev";
      this.prevButton.disabled = true; // disable the previous button on page 1
  
      this.nextButton = document.querySelector("#next-button");
      this.nextButton.innerHTML = "Next";

    }

    get movie_genre(){
      return this._movie_genre;
    }

    set movie_genre(new_movie_genre){
      this._movie_genre = new_movie_genre;
      this.notifyObservers();
      this.run();
    }


    handleInFirstPage = () =>{
      // Check if it's not the first page
      if (this.currentPage > 1) {
        this.firstButton.style.display = "inline";  
        this.prevButton.disabled = false;           
      } else {
        this.firstButton.style.display = "none";    
        this.prevButton.disabled = true;            
      }
      this.updateButtons();
  }
    
  
    updateMovies = () => {
      const start = (this.currentPage - 1) * 18;
      const end = this.currentPage * 18;
      const movies_per_page = this.movie_genre.slice(start, end);
      this.GENRES.innerHTML = "";
      movies_per_page.forEach((movie) => {
        const movieCol = create_movie_frame(movie);
        this.GENRES.appendChild(movieCol);
      });
    }
  
    updateButtons = () =>{
      while (this.rangeButtonPage.firstChild) {
        this.rangeButtonPage.removeChild(this.rangeButtonPage.firstChild);
      }
      
      for (let i = this.currentPage; i <= this.currentPage + 2; i++) {
  
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
          this.handleInFirstPage();
          this.updateMovies();
        });
        this.rangeButtonPage.appendChild(pageButton);
      }
    }

    run = () =>{
      this.updateMovies();
      this.handleInFirstPage();
    }
  }

  export default BasePagination;