import $ from 'jquery'

var calls = {};
calls.queryOmdb = function(query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?i=";
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term;
  return $.getJSON(bechurl).then(function(response){
    return response;
  });
};

calls.queryOther = function(id) {
  var url = "https://omdbapi.com?i="
  var bechId = "tt" + id; //get individual id
  return $.getJSON(url + bechId).then(function(res){
    return res
 });
};

export default calls;
