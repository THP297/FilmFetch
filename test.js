class MovieDB {
  constructor(fetchStrategy) {
      this.fetchStrategy = fetchStrategy;
  }

  setFetchStrategy(strategy) {
      this.fetchStrategy = strategy;
  }

  async fetchAndDisplay() {
      const data = await this.fetchStrategy.fetch();
      this.display(data);
  }

  display(data) {
      // Your code to display data on HTML elements
  }
}

class FetchByGenre {
  constructor(genreId) {
      this.genre = genreId;
  }

  async fetch() {
      // Your code to fetch data by genre
  }
}

class FetchBySearch {
  constructor(query) {
      this.query = query;
  }

  async fetch() {
      // Your code to fetch data by search
  }
}

const movieDB = new MovieDB(new FetchByGenre('Action'));
movieDB.fetchAndDisplay();

movieDB.setFetchStrategy(new FetchBySearch('Inception'));
movieDB.fetchAndDisplay();
