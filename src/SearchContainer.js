import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"
import calls from "./Utils"

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: [],
    }
  }

  onSearchInput(evt){
    this.setState({
      query: evt.target.value,
    })
  }

  onSubmitQuery(evt){
    var self = this;
    evt.preventDefault();
    calls.queryOmdb(this.state.query).then( data => {
      var complete = 0;
      for(var i = 0; i < data.length; i++){
        (function(i){
          calls.queryOther(data[i]["imdbid"]).then( otherData => {
            data[i].Poster = otherData.Poster;
            data[i].Genre = otherData.Genre;
            data[i].imdbRating = otherData.imdbRating;
            data[i].Rated = otherData.Rated;
            data[i].Plot = otherData.Plot;
            if (complete++ >= data.length -1){
              self.setState({
                query: '',
                movies: data,
                hasSearched: true
              });
            }
          });
        })(i);
      }
    })
    };
  

  render() {

    if (this.state.hasSearched){
      return (
        <Results movies={this.state.movies} />
      )
    }
    else {
    return (
      <Search
        handleSearchInput={(evt) => this.onSearchInput(evt)}
        handleSubmitQuery={(evt) => this.onSubmitQuery(evt)}
        query={this.state.query}
        />
      )
    }
  }
}

export default SearchContainer
