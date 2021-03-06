import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Je suis dans mon header
        </header>
        <Router>
          <div>
            <Route exact path="/" component= {HomeContainer}/>
            <Route exact path="/categories/:id" component= {CategoryContainer}/>
          </div>
        </Router>
        <footer>
          Je suis dans mon footer
        </footer>
      </div>
    );
  }
}

export default App;
