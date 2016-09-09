import React, {Component} from 'react';
import SearchContainer from './SearchContainer.js'

class Home extends Component {
  render() {
    return (
      <div>
        <h1><a href="/">Imdb Bechdel Rater</a></h1>
        <SearchContainer />
      </div>
    )
  }
}

export default Home
