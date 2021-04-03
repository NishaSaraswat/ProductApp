import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Items from './pages/Items';
import Item from './pages/Item';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/products" exact component={Items} />
            <Route path="/products/:id" component={Item} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
