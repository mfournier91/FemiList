import React, { Component } from 'react';

class Main extends Component {
  render() {
    return(
    <div>
    <a href="/"><img id="femLogo" src={require('./public/flLogo.png')} alt="FemiList logo" /></a>
    {this.props.children}
    </div>
  );
  }
}

module.exports = Main;
