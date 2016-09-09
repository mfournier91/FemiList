import React, {Component} from "react";
import $ from 'jquery';

class Results extends Component{
  render(){
    let {movies} = this.props
    let results = movies.map((movie, index) => {
      let title = $('<p>').html(movie.title).text();
      if (title.endsWith(", The")) {
        title = "The " + title.substring(0, title.length-5)
      }

      return (
        <div key={index}>
          <h1>{title}</h1>
          <img src={movie.Poster} alt={title} />
          <p> Released in {movie.year}</p>
          <p>Bechdel Score: {movie.rating}</p>
        </div>
      )
    })

    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results
