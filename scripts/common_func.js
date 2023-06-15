export const IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=846f16d2846b863d9986bcc6dbb1b6c2";
const MOVIES_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
export function DefinePoster(poster_path) {
  var item = document.createElement("img");
  item.setAttribute("src", IMG_URL + poster_path);
  item.setAttribute("class", "image-item");
  return item;
}

function PUSH_related(id, related_movie) {
  function Push_related_movie_poster(related, element) {
    const movieCol = create_movie_frame(element);
    related.appendChild(movieCol);
  }

  async function get_related_movie(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function get_related_movie_url(id) {
    var random_page = "&page=" + String(Math.floor(Math.random() * 500) + 1);
    let url =
      MOVIES_DETAIL_URL + String(id) + "/similar" + API_KEY + random_page;
    return url;
  }

  const url = get_related_movie_url(id);
  get_related_movie(url).then((data) => {
    console.log(data.results.length);
    if (data.results.length == 0) {
      let related_movies = document.querySelector("#related_movies");
      related_movies.style.display = "none";
    }
    data.results.forEach((element) => {
      if (!element.poster_path) {
      } else {
        Push_related_movie_poster(related_movie, element);
      }
    });
  });
}

function watch_movie(element) {
  fetch("movie_detail.html")
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const index_content = document.querySelector("body");
      const watch_content = doc.querySelector("body");
      index_content.innerHTML = watch_content.innerHTML;
      const image = document.getElementById("watch_img");
      image.setAttribute("src", IMG_URL + element.poster_path);

      const section_desc = document.querySelector("#section-desc");
      const desc = document.createElement("p");
      desc.textContent = element.overview;
      section_desc.appendChild(desc);

      const RELATED = document.querySelector(".related-row-1");
      PUSH_related(element.id, RELATED);

      let url = MOVIES_DETAIL_URL + String(element.id) + API_KEY;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const MOVIE_VIDEO_URL =
            MOVIES_DETAIL_URL + String(element.id) + "/videos" + API_KEY;
          fetch(MOVIE_VIDEO_URL)
            .then((response) => response.json())
            .then((vid) => {
              let videoUrl = vid.results[0].key;
              let video = document.createElement("iframe");
              video.setAttribute(
                "src",
                "https://www.youtube.com/embed/" + videoUrl
              );
              console.log(video.src);
              const video_wrapper = document.querySelector("#video-wrapper");
              video_wrapper.appendChild(video);
            });

          const companies = [];
          data.production_companies.forEach((e) => {
            companies.push(" " + e["name"]);
          });

          const list_of_data = [
            data.original_title,
            data.adult,
            data.vote_average,
            data.release_date,
            data.production_countries[0]["name"],
            data.spoken_languages[0]["name"],
            data.genres[0]["name"],
            companies,
          ];
          const data_desc = [
            "Movie Name:",
            "Adult:",
            "Rating:",
            "Release Date:",
            "Country:",
            "Language:",
            "Genres:",
            "Companies:",
          ];
          if (list_of_data.length == 0) {
            const content_section = document.querySelector(".content-section");
            content_section.style.height = "100vh";
          }
          list_of_data.forEach((e, index) => {
            const infor = document.getElementById("watch_infor");
            const infor_row = document.createElement("tr");

            const data_desc_row = document.createElement("td");
            const data_strong = document.createElement("strong");
            data_desc_row.appendChild(data_strong);
            data_strong.innerHTML = data_desc[index];
            data_desc_row.appendChild(data_strong);
            infor_row.appendChild(data_desc_row);

            const data_row = document.createElement("td");
            data_row.innerHTML = e;
            infor_row.appendChild(data_row);
            infor.appendChild(infor_row);
          });
        });
    });
}

export function create_movie_frame(element) {
  const vote = document.createElement("p");
  vote.textContent = "Rate: " + element.vote_average;
  vote.setAttribute("id", "rating");

  const play_button = document.createElement("img");
  play_button.setAttribute("src", "./images/play-button.png");
  play_button.setAttribute("id", "play-button");

  const overview_button = document.createElement("button");
  overview_button.appendChild(play_button);
  overview_button.onclick = () => watch_movie(element);

  const overview_frame = document.createElement("div");
  overview_frame.classList.add("overview-frame");
  overview_frame.appendChild(overview_button);
  overview_frame.appendChild(vote);

  const movieCol = document.createElement("div");
  movieCol.classList.add(
    "col-12",
    "col-xl-2",
    "col-lg-3",
    "col-md-3",
    "col-sm-4",
    "movie-col"
  );

  const movie_frame = document.createElement("div");
  movie_frame.classList.add("movie-frame");
  const moviePoster = DefinePoster(element.poster_path);
  moviePoster.alt = `Poster for ${element.original_title}`;

  const movieTitle = document.createElement("p");
  movieTitle.setAttribute("id", "movie-title");
  movieTitle.textContent = element.original_title;

  movie_frame.appendChild(moviePoster);
  movie_frame.appendChild(overview_frame);
  movieCol.appendChild(movie_frame);
  movieCol.appendChild(movieTitle);

  return movieCol;
}
