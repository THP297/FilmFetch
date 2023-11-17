import {NowPlaying, Popular, Upcoming, Random} from "./MovieLists.js";
import ListGenres from "./designPattern/ListGenres.js";

const nowPlaying = new NowPlaying("#top_rated_row","https://api.themoviedb.org/3/movie/top_rated");
const popular = new Popular("#popular_row","https://api.themoviedb.org/3/movie/popular");
const upcoming = new Upcoming("#upcoming_row","https://api.themoviedb.org/3/movie/upcoming");
const random = new Random("#random_row","https://api.themoviedb.org/3/discover/movie","https://api.themoviedb.org/3/movie/");


nowPlaying.run();
popular.run();
upcoming.run();
random.run();

const listGenres=  new ListGenres();
listGenres.setUpResponsiveGenres();
listGenres.setGenreTemplate();
