
class PaginationButtonEvents{
    constructor()
    {
    }
    addButtonEvents = () => { 
        this.input_page.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
              this.currentPage = Number(input_page.value);
              if (this.currentPage > this.page_length) {
                this.currentPage = this.page_length;
              }
              this.handleInFirstPage(this.currentPage);
              this.updatePage(this.currentPage);
              input_page.value = "";
            }
          });
        
          this.nextButton.addEventListener("click", () => {
            this.currentPage++;
            this.handleInFirstPage(this.currentPage);
            this.updatePage(this.currentPage);
          });
        
          this.firstButton.addEventListener("click", () => {
            this.currentPage = 1;
            this.handleInFirstPage(1);
            this.updatePage(1);
          });
        
          this.lastButton.addEventListener("click", () => {
            this.currentPage = this.page_length;
            this.handleInFirstPage(this.currentPage);
            this.updatePage(this.currentPage);
          });
        
          this.prevButton.addEventListener("click", () => {
            this.currentPage--;
            this.handleInFirstPage(this.currentPage);
            this.updatePage(this.currentPage);
          });
        
          this.updatePage(this.currentPage);
          this.handleInFirstPage(this.currentPage);
        
          this.prevButton.classList.add("inline");
          this.nextButton.classList.add("inline");
          this.rangeButtonPage.classList.add("inline");
    }
}

export default PaginationButtonEvents;