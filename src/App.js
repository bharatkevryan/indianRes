import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import MenuTitles from './components/MenuTitles'
import MenuSingleTile from './components/MenuSingleTile'

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Nav/> */}
      </Router>
      
      <Router>
        <Switch>
        <Route path = {process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route path = "/menu" exact component={MenuTitles} />
        <Route path="/singlemenu/:id" exact component={MenuSingleTile} />
        </Switch>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
