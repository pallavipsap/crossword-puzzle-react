import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { ConnectedCrosswordContainer } from './crossword-puzzle/crosswordContainer'

class App extends Component {
  render() {
    return (
      <ConnectedCrosswordContainer />
    );
  }
}

export default App
