import { create_movie_frame } from "../../helper/common_func.js";
import MovieFrame from "../CreateMovieFrame/main.js";
class CategoryTemplate {
    constructor(category_id, baseUrl) {
      this.apiKey = "846f16d2846b863d9986bcc6dbb1b6c2";
      this.baseUrl = baseUrl;
      this.category_id = category_id;
      this.category = document.querySelector(category_id);
    }
  
    fetchData = async () => {
      try {
        let movie_detail_url = this.baseUrl + "?api_key="  + this.apiKey;
        const response = await fetch(movie_detail_url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    run = async () => {
      const data = await this.fetchData();
      data.results.slice(0, 12).forEach((element) => {
        const movieFrame = new MovieFrame(element);
        const movieCol = movieFrame.createMovieFrame();
        this.category.appendChild(movieCol);
      });
    };
  }

class NowPlaying extends CategoryTemplate{
    constructor(category_id, baseUrl){super(category_id, baseUrl )}
}
class Popular extends CategoryTemplate{
    constructor(category_id, baseUrl){super(category_id, baseUrl )}
}
class Upcoming extends CategoryTemplate{
    constructor(category_id, baseUrl){super(category_id, baseUrl )}
}

class Random extends CategoryTemplate {
    constructor(category_id, baseUrl, movieDetailUrl) {
        super(category_id, baseUrl);
        this.movieDetailUrl = movieDetailUrl;
    }

    fetchData = async () => {
        try {
        var random_page = "&page=" + String(Math.floor(Math.random() * 500) + 1);
        let discover_url = this.baseUrl + "?api_key=" + this.apiKey + random_page;
        const response = await fetch(discover_url);
        const data = await response.json();
        return data;
        } catch (error) {
        console.log(error);
        }
    };

    getRandomPoster = async (movieId, category) => {
        let movie_detail_url = this.movieDetailUrl + String(movieId) + "?api_key=" + this.apiKey;
        try {
        const res = await fetch(movie_detail_url);
        const data = await res.json();
        const movieFrame = new MovieFrame(data);
        const movieCol = movieFrame.createMovieFrame();
        category.appendChild(movieCol);
        } catch (error) {
        console.log(error);
        }
    };

    run = async () => {
        const data = await this.fetchData();
        data.results.slice(0, 12).forEach((element) => {
        this.getRandomPoster(element.id, this.category);
        });
    };
}
  
export {NowPlaying, Popular, Upcoming, Random};