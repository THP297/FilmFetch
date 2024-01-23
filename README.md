# FilmFetch

🎬 *FilmFetch** is a comprehensive web application that provides detailed information about movies. It is built using modern JavaScript and leverages various design patterns for efficient and maintainable code.

## Features

📝 **Movie Details:** The application provides detailed information about each movie, including descriptions, related movies, and videos. This is implemented in the `MovieDetail` class, which uses various helper classes like `MovieDescription`, `MovieImage`, and `MovieRelated`.

🔄 **Pagination:** The application supports pagination for browsing through different movies. This is implemented using the Observer design pattern in the `DerivedButtonEvents` class.

🔍 **Search:** Users can search for movies using the search bar. The search functionality is implemented in the `ConcreteSearch` class, which extends the `UserActionsController` class.

## Styling

🎨 The application is styled using SCSS, with styles organized into different files for each component, such as `home.scss`, `movies_detail.scss`, `movies_frame.scss`, and `movie_genre.scss`.

## Templates

📄 HTML templates are used for different parts of the application, such as `genres.html`, `movie_detail.html`, and `search.html`.
