import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?s=" + term;
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term


  return $.getJSON(bechurl).then(function(response){


    return $.getJSON(url).then(function(response2){

      for(var i = 0; i < response.length; i++){  //loop the the bech responses

        for(var j = 0; j < response2["Search"].length; j++){ //loop thru the omdb responses

          if("tt" + response[i]["imdbid"] === response2["Search"][j]["imdbID"]){ //check for when the ids are equal
            console.log("match: " + response[i]["imdbid"] + " equals " + response2["Search"][j]["imdbID"]);
            response[i].Poster = response2["Search"][j].Poster  //give the poster url to the bechdel obj
          }

        }
      }
      console.log("Final return: ", response);
      return response; //return the original bech responses after we add a poster property to it

    })
  })

  
}
