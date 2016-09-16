import React, {Component} from "react";

class Bechdel extends Component {
  render() {
    return (
      <div className="BechdelBox">
         <h1>What is the Bechdel Test?</h1>
         <h2><span id="pinkSteps">STEP 1: </span>There must be at least two named female characters in the film</h2>
         <h2><span id="pinkSteps">STEP 2: </span>The two(+) female characters talk to each other at some point</h2>
         <h2><span id="pinkSteps">STEP 3: </span>Their dialogue is about something other than a man</h2>
         <p>It&#39;s a simple test developed by cartoonist Alison Bechdel used to highlight gender disparity in movies and other media. The test is a great tool to measure not just the number of female characters on the screen, but to illustrate how often popular media fail to include any female character development or female-driven narratives. This trend perpetuates gender norms that women are only defined by their relationship to men, and inherently lack their own value.</p>
         <p id="parGap">The Bechdel test seems like a simple requirement to ask of the film industry, but according to the Bechdel Test API&#39;s results, <span id="boldP">nearly half of all movies couldn&#39;t pass the test.</span></p>
         <img className="bechComic" src="https://upload.wikimedia.org/wikipedia/en/b/bf/Dykes_to_Watch_Out_For_%28Bechdel_test_origin%29.jpg" alt="bechdel test comic strip" />
       </div>
    )
  }
}

export default Bechdel;
