import { NowPlaying, Random,Popular,Upcoming } from "./scripts/MovieLists/MovieLists.js";
import ConcreteSearch from "./scripts/Patterns/UserActionsController/TemplateMethod/ConcreteSearch.js";
import ConcreteGenre from "./scripts/Patterns/UserActionsController/TemplateMethod/ConcreteGenre.js";


const nowPlaying = new NowPlaying("#top_rated_row","https://api.themoviedb.org/3/movie/top_rated");
const popular = new Popular("#popular_row","https://api.themoviedb.org/3/movie/popular");
const upcoming = new Upcoming("#upcoming_row","https://api.themoviedb.org/3/movie/upcoming");
const random = new Random("#random_row","https://api.themoviedb.org/3/discover/movie","https://api.themoviedb.org/3/movie/");
nowPlaying.run();
popular.run();
upcoming.run();
random.run();



const concreteGenre = new ConcreteGenre();
concreteGenre.setUpResponsiveGenres();
concreteGenre.templateMethod();

const concreteSearch = new ConcreteSearch();
concreteSearch.templateMethod()