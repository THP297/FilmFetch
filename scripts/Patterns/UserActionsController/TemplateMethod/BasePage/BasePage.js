
class BasePage{
    constructor() {
      this.api_key = "846f16d2846b863d9986bcc6dbb1b6c2";
      this.baseUrl = "https://api.themoviedb.org/3/discover/movie";

      this.spinner = document.querySelector("#spinner");
      this.pagination = document.querySelector(".pagination")
    }

    showLoading = () =>{
      this.pagination.style.display= "none";
      this.spinner.style.display = "block";
    }

    hideLoading = () =>{
      this.pagination.style.display= "flex";
      this.spinner.style.display = "none";
    }

  }

export default BasePage;