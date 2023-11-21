import ObserverPagination from "./ObserverPagination.js";

class DerivedButtonUpdate extends ObserverPagination{
    
    constructor(){
      super()
      this.basePagination = null;
    }
    
    update(subject){
        this.basePagination = subject;
        this.run();
      }

      run() {
        this.handleInFirstPage();
        this.clearButtons();
        this.createButtons();
      }
    
      clearButtons() {
        while (this.basePagination.rangeButtonPage.firstChild) {
          this.basePagination.rangeButtonPage.removeChild(this.basePagination.rangeButtonPage.firstChild);
        }
      }
    
      createButtons() {
        for (let i = this.basePagination.currentPage; i <= this.basePagination.currentPage + 2; i++) {
          if (i > Math.ceil(this.basePagination.movie_genre.length / 18)) {
            break;
          }
          const pageButton = this.createPageButton(i);
          this.basePagination.rangeButtonPage.appendChild(pageButton);
        }
      }
    
      createPageButton(i) {
        const pageButton = document.createElement("button");
        pageButton.innerHTML = i;
        pageButton.id = i;
        if (this.basePagination.currentPage === i) {
          pageButton.classList.add("active");
        }
        pageButton.addEventListener("click", () => {
          this.basePagination.currentPage = i;
          this.basePagination.handleInFirstPage();
          this.basePagination.updateMovies();
        });
        return pageButton;
      }

}

export default DerivedButtonUpdate;