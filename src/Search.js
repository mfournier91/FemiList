import React, {Component} from 'react';

class Search extends Component {
  render(){
    return (
    <form>
      <input type="text" placeholder="Enter a Movie Title..." />
      <button type="submit">Search</button>
    </form>
  )
}
}

export default Search
