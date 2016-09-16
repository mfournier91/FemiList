import React, { Component } from 'react';

class Main extends Component {
  render() {
    return(
    <div>
    <a href="/FemiList"><img id="femLogo" src="http://i.imgur.com/Pbfm6sX.png" alt="FemiList logo" /></a>
    {this.props.children}
    </div>
  );
  }
}

module.exports = Main;
