import React, { Component } from 'react';
import PortfolioFixed from './components/portfoliofixed'
import PortfolioContent from './components/portfoliocontentright'


class App extends Component {
  render() {
    return (
      <div id="app-container">
      <PortfolioFixed />
      <PortfolioContent />
      </div>
    );
  }
}

export default App;
