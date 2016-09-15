import React, {Component} from "react";
import $ from 'jquery';

class Results extends Component{
  render(){
    let {movies} = this.props
    console.log("movies",movies);
    let results = movies.map((movie, index) => {
      let title = $('<p>').html(movie.title).text();
      if (title.endsWith(", The")) {
        title = "The " + title.substring(0, title.length-5)
      }

      if (movie.Poster === "N/A"){
        movie.Poster = "http://i.imgur.com/ddETfiC.jpg"
      }
      if (movie.rating === "0"){
        movie.iconClassX = "fa fa-times"
        movie.femSplain = "A rating of 0 indicates that this movie has fewer than two named women in it";
      }
      else if(movie.rating === "1") {
        movie.iconClass1 = 'fa fa-check green'
        movie.iconClass2 = 'fa fa-check gray'
        movie.iconClass3 = 'fa fa-check gray'
        movie.femSplain = "A rating of 1 indicates that this movie has at least two named female characters in it"
      }
      else if(movie.rating === "2"){
        movie.iconClass1 = 'fa fa-check green'
        movie.iconClass2 = 'fa fa-check green'
        movie.iconClass3 = 'fa fa-check gray'
        movie.femSplain = "A rating of 2 indicates that this movie has at least two named female characters who talk to each other"
      }
      else if(movie.rating === "3"){
        movie.iconClass1 = 'fa fa-check green'
        movie.iconClass2 = 'fa fa-check green'
        movie.iconClass3 = 'fa fa-check green'
        movie.femSplain = "A rating of 3 indicates that this movie has at least two named female characters who talk to each other about something other than a man."
      }
      else {
        movie.femSplain = "";
      }
      return (
        <div key={index}>
          <div id="movieWrap">
            <h1>{title}</h1>
            <img id="movPic" src={movie.Poster} alt={title} />
            <p><span id="boldP">Genre</span>: {movie.Genre}</p>
            <p><span id="boldP">Released in</span>: {movie.year}</p>
            <p><span id="boldP">Parental Rating</span>: {movie.Rated}</p>
            <p><span id="boldP">IMDB rating</span>: {movie.imdbRating} / 10</p>
            <p><span id="boldP">Plot</span>: {movie.Plot}</p>
            <h3>Bechdel Score: {movie.rating} / 3</h3>
            <i className={movie.iconClassX} aria-hidden='true'></i>
            <i className={movie.iconClass1} aria-hidden='true'></i>
            <i className={movie.iconClass2} aria-hidden='true'></i>
            <i className={movie.iconClass3} aria-hidden='true'></i>
            <p>{movie.femSplain}</p>
          </div>
        </div>
      );

    });

    return (
      <div>
        {results}
      </div>
    );
  }
}

export default Results;
