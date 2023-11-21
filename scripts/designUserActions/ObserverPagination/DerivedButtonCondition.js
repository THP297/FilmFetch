import ObserverPagination from "./ObserverPagination.js";

class DerivedButtonCondition extends ObserverPagination{
  constructor(){
    super()
    this.basePagination = null;
  }

  update(subject){
    this.basePagination = subject;
    this.setPageLength();
    this.handleButtonGesture();
  }

    setPageLength = ()=>{
        this.basePagination.page_length = Math.ceil(this.basePagination.movie_genre.length / 18);
        this.basePagination.lastButton.innerHTML = this.basePagination.page_length;
        this.basePagination.input_page.setAttribute("placeholder", ".../" + String(this.basePagination.page_length));
      }

      handleButtonGesture = () =>{
        //------------------------------------------------------------------
        if (this.basePagination.currentPage >= 3) {
          this.basePagination.firstButton.setAttribute("style", "opacity: 1;");
        } else {
          this.basePagination.firstButton.setAttribute("style", "opacity: 0;");
        }
    
        if (this.basePagination.currentPage <= 1) {
          this.basePagination.prevButton.disabled = true;
        } else {
          this.basePagination.prevButton.disabled = false;
        }
    
        if (this.basePagination.currentPage >= this.basePagination.page_length)
        {
          this.basePagination.nextButton.disabled = true;
        } else {
          this.basePagination.nextButton.disabled = false;
        }
    }

}

export default DerivedButtonCondition;