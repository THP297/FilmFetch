import { create_movie_frame} from "./designPattern/common_func.js";

const content_section = document.querySelector(".content-section");

export default async function PUSH(id) {
  content_section.style.height = "100vh";

  const API_KEY = "846f16d2846b863d9986bcc6dbb1b6c2";
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const GENRES = document.querySelector(".genre-frame");

  async function fetchMoviesByGenre(genreId) {
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&with_genres=${genreId}`);
      const data = await response.json();
  
      if (data.results) {
        console.log('Movies with Genre ID 27 (Horror):', data.results);
        return data.results;
      } else {
        console.error('Error fetching movies:', data.status_message);
      }
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  }

      const movie_genre = await fetchMoviesByGenre(id)

      const PaginationVisible = document.querySelector(".pagination");
      PaginationVisible.style.display = "none";

      const spinner = document.querySelector("#spinner");
      spinner.style.display = "block";

      const page_length = Math.ceil(movie_genre.length / 18);

      content_section.style.height = "auto";
      spinner.style.display = "none";
      PaginationVisible.style.display = "flex";


      const input_page = document.querySelector("#input-page");
      input_page.setAttribute("placeholder", ".../" + String(page_length));
      let currentPage = 1;

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

          if (i > Math.ceil(movie_genre.length/18))
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
          console.log(pageButton)
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

              updateButtons(currentPage);
      }

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

let genres = {
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ],
};

function setup_GENRES() {
  var genres_item = document.querySelector("#list-group");
  genres["genres"].forEach((element) => {
    var item = document.createElement("a");
    item.setAttribute("class", "category");
    item.setAttribute("href", "#");
    item.setAttribute("id", element.id);
    item.innerHTML = element.name;
    var itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("class", "col-6 col-xl-3 col-md-4 col-sm-6");
    itemWrapper.setAttribute("id", "wrapperLink");
    itemWrapper.appendChild(item);
    genres_item.appendChild(itemWrapper);
  });
}

function send_genre(id, genre_title) {
  fetch("genres.html")
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const root_content = document.querySelector("#display-content");
      const genres_content = doc.querySelector("#display-content");
      root_content.innerHTML = genres_content.innerHTML;
      let genreTitle = document.querySelector("#genre-title");
      console.log(genreTitle)
      genreTitle.innerHTML = genre_title;
      PUSH(id);
    });
}

function GENRE_BUTTON_effect() {
  const items = document.querySelectorAll(".category");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      send_genre(e.target.id, e.target.innerHTML);
    });
  });
}

export { genres, setup_GENRES, GENRE_BUTTON_effect, send_genre };
