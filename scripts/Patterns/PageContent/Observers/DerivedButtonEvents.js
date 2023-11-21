import ObserverPagination from "../ObserverPagination.js";

class DerivedButtonEvents extends ObserverPagination{

  constructor(){
    super()
    this.basePagination = null;
  }

  update(subject)
  {
    this.basePagination = subject;
    this.addButtonEvents();
    this.setPageLength();
  }

  setPageLength = ()=>{
    this.basePagination.page_length = Math.ceil(this.basePagination.movie_genre.length / 18);
    this.basePagination.lastButton.innerHTML = this.basePagination.page_length;
    this.basePagination.input_page.setAttribute("placeholder", ".../" + String(this.basePagination.page_length));
  }

    addButtonEvents = () => { 
        this.basePagination.input_page.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
              this.basePagination.currentPage = Number(this.basePagination.input_page.value);
              if (this.basePagination.currentPage > this.basePagination.page_length) {
                this.basePagination.currentPage = this.basePagination.page_length;
              }
              this.basePagination.handleInFirstPage();
              this.basePagination.updateMovies();
              this.basePagination.input_page.value = "";
            }
          });
        
          this.basePagination.nextButton.addEventListener("click", () => {
            this.basePagination.currentPage++;
            this.basePagination.handleInFirstPage();
            this.basePagination.updateMovies();
          });
        
          this.basePagination.firstButton.addEventListener("click", () => {
            this.basePagination.currentPage = 1;
            this.basePagination.handleInFirstPage();
            this.basePagination.updateMovies();
          });
        
          this.basePagination.lastButton.addEventListener("click", () => {
            this.basePagination.currentPage = this.basePagination.page_length;
            this.basePagination.handleInFirstPage();
            this.basePagination.updateMovies();
          });
        
          this.basePagination.prevButton.addEventListener("click", () => {
            this.basePagination.currentPage--;
            this.basePagination.handleInFirstPage();
            this.basePagination.updateMovies();
          });
          
          
          this.basePagination.prevButton.classList.add("inline");
          this.basePagination.nextButton.classList.add("inline");
          this.basePagination.rangeButtonPage.classList.add("inline");
    }
}

export default DerivedButtonEvents;