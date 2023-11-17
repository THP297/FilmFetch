import { create_movie_frame } from "./common_func.js";

const content_section = document.querySelector(".content-section");

export async function PUSH(target) {
  content_section.style.height = "100vh";

  const API_KEY = "846f16d2846b863d9986bcc6dbb1b6c2";
  const BASE_URL = "https://api.themoviedb.org/3";
  const GENRES = document.querySelector(".genre-frame");
  


  async function searchMovieByName(movieName) {

    let allResults = [];
  
    try {
      let page = 1;
      let totalPages = 1; // Initialize totalPages to a value greater than the starting page
  
      while (page <= totalPages) {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&page=${page}`
        );
        const data = await response.json();
  
        if (data.results && data.results.length > 0) {
          allResults = allResults.concat(data.results);
          totalPages = data.total_pages;
          console.log(totalPages);
          page++;
        } else {
          console.error('No results found.');
          break; // No need to continue if there are no results
        }
      }
  
      console.log('All search results:', allResults);
      return allResults;
    } catch (error) {
      console.error('Error searching for movies:', error.message);
      return [];
    }
  }

    const PaginationVisible = document.querySelector(".pagination");
    PaginationVisible.style.display = "none";

    const spinner = document.querySelector("#spinner");
    spinner.style.display = "block";

    content_section.style.height = "auto";
    PaginationVisible.style.display = "flex";
    spinner.style.display = "none";

      const movie_genre = await searchMovieByName(target[0])

      const page_length = Math.ceil(movie_genre.length / 18);

      const input_page = document.querySelector("#input-page");
      input_page.setAttribute("placeholder", ".../" + String(page_length));
      let currentPage = 1;

      const slicePage = document.querySelector(".slice-page");
      const rangeButtonPage = document.querySelector("#range-button-page");

      const firstButton = document.querySelector("#first-button");
      firstButton.innerHTML = "1";

      const lastButton = document.querySelector("#last-button");
      lastButton.innerHTML = page_length;

      const prevButton = document.querySelector("#prev-button");
      prevButton.innerHTML = "Prev";
      prevButton.disabled = true; // disable the previous button on page 1

      const nextButton = document.querySelector("#next-button");
      nextButton.innerHTML = "Next";

      function updatePage(currentPage) {
        const start = (currentPage - 1) * 18;
        const end = currentPage * 18;
        const movies_per_page = movie_genre.slice(start, end);
        GENRES.innerHTML = "";
        movies_per_page.forEach((movie) => {
          const movieCol = create_movie_frame(movie);
          GENRES.appendChild(movieCol);
        });
      }

      function updateButtons(page) {
        if (page >= 3) {
          firstButton.setAttribute("style", "opacity: 1;");
        } else {
          firstButton.setAttribute("style", "opacity: 0;");
        }
        if (page > 1) {
          prevButton.disabled = false;
        } else {
          prevButton.disabled = true;
        }

        while (rangeButtonPage.firstChild) {
          rangeButtonPage.removeChild(rangeButtonPage.firstChild);
        }
        
        for (let i = page; i <= page + 2; i++) {

            if (i > Math.ceil(movie_genre.length/ 18))
            {
                break;
            }

          const pageButton = document.createElement("button");
          pageButton.innerHTML = i;
          pageButton.id = i;
          if (activeButtonId === i) {
            pageButton.classList.add("active");
          }
          pageButton.addEventListener("click", () => {
            activeButtonId = i;

            updatePageButtons(activeButtonId);
            updatePage(activeButtonId);
          });
          rangeButtonPage.appendChild(pageButton);
        }
      }

      let activeButtonId = 1;

      function updatePageButtons(currentPage) {
        // Check if it's not the first page
        if (currentPage > 1) {
          firstButton.style.display = "inline";  // Show the first button
          prevButton.disabled = false;           // Enable the previous button
        } else {
          firstButton.style.display = "none";    // Hide the first button on the first page
          prevButton.disabled = true;            // Disable the previous button on the first page
        }

        if (currentPage === page_length) {
            nextButton.style.display = "none"; // Hide nextButton when on the last page
            lastButton.style.display = "none"
          } else {
            nextButton.style.display = "inline"; // Show nextButton otherwise
            lastButton.style.display = "inline";
          }

        updateButtons(currentPage);
}
      updatePageButtons(activeButtonId);

      input_page.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          activeButtonId = Number(input_page.value);
          if (activeButtonId > page_length) {
            activeButtonId = page_length;
          }
          updatePageButtons(activeButtonId);
          updatePage(activeButtonId);
          input_page.value = "";
        }
      });

      nextButton.addEventListener("click", () => {
        activeButtonId++;
        updatePageButtons(activeButtonId);
        updatePage(activeButtonId);
      });

      firstButton.addEventListener("click", () => {
        activeButtonId = 1;
        updatePageButtons(1);
        updatePage(1);
      });

      lastButton.addEventListener("click", () => {
        activeButtonId = page_length;
        updatePageButtons(activeButtonId);
        updatePage(activeButtonId);
      });

      prevButton.addEventListener("click", () => {
        activeButtonId--;
        updatePageButtons(activeButtonId);
        updatePage(activeButtonId);
      });

      updatePage(currentPage);
      updatePageButtons(currentPage);

      prevButton.classList.add("inline");
      nextButton.classList.add("inline");
      rangeButtonPage.classList.add("inline");
}


function push_target(value) {
  const target = search.value.toLowerCase().split(" ");
  console.log(target);
  fetch("search.html")
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const root_content = document.querySelector("#display-content");
      const genres_content = doc.querySelector(".display-content");
      root_content.innerHTML = genres_content.innerHTML;
      let genreTitle = document.querySelector("#genre-title");
      genreTitle.innerHTML = value;
      PUSH(target);
    });
}

const search_btn = document.querySelector("#searchBtn");
search_btn.addEventListener("click", () => {
  let input_value = document.querySelector("#search");
  push_target(input_value.value);
});


const search = document.querySelector("#search");
search.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    push_target(event.target.value);
  }
});
