import React, {Component} from 'react';

class Search extends Component {

  render(){
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
    <div className="searchBox">
      <h1>Movie ratings for feminists.*</h1>
      <h4>*And for the rest of the population, because the media&#39;s representation of women matters.</h4>


      <form onSubmit={(evt) => handleSubmitQuery(evt)}>
        <h2>Does your movie pass the <span id="pinkText">Bechdel Test?</span></h2>
        <input
        onChange={(evt) => handleSearchInput(evt)}
        value={query}
        type="text"
        placeholder="Search for a movie" />
      <button className="submit" type="submit">Search</button>
      </form>
    </div>
  )
}
}

export default Search
