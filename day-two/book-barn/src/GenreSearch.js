import { Component } from 'react';

class GenreSearch extends Component {
  render() {
    return (
      <section>
        <h4>Genres</h4>
        <div>
          <input type="text" placeholder="Find a genre by name" />
          <button>Find Genre</button>
        </div>
      </section>
    );
  }
}

export default GenreSearch;
