import { RANDOM } from "./RANDOM.js";
import { NOWPLAYING } from "./NOWPLAYING.js";
import { POPULAR } from "./POPULAR.js";
import { UPCOMING } from "./UPCOMING.js";
import { genres, setup_GENRES, GENRE_BUTTON_effect, send_genre, PUSH } from "./GENRES.js"

function scrollToNext(section) {
    var nextSection = document.querySelector(section);
    nextSection.scrollIntoView({ behavior: "smooth" });
}

const random_section = document.querySelector('#random_btn')
random_section.onclick = ()=>{scrollToNext(".RANDOM")}
const top_rated_section = document.querySelector('#top_rated_btn')
top_rated_section.onclick = ()=>{scrollToNext(".TOP_RATED")}

const popular_section = document.querySelector('#popular_btn')
popular_section.onclick = ()=>{scrollToNext(".POPULAR")}

const upcoming_section = document.querySelector('#upcoming_btn')
upcoming_section.onclick = ()=>{scrollToNext(".UPCOMING")}

RANDOM();
NOWPLAYING();
POPULAR();
UPCOMING();
setup_GENRES();
GENRE_BUTTON_effect();
// export function Original_HomePage() {
//     fetch('root.html').then(res => res.text())
//         .then(html => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');
//             const index_content = document.querySelector('.display-content');
//             const root_content = doc.querySelector('.display-content');
//             index_content.innerHTML = root_content.innerHTML;
//             RANDOM();
//             NOWPLAYING();
//             POPULAR();
//             UPCOMING();
//             fetch("index.html").then(res => res.text()).then(html =>{
//                 console.log(html)
//             })
//         })
// }

// const main_btn = document.getElementById('home-button')
// main_btn.onclick = () => Original_HomePage();