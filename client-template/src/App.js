import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Items from './pages/Items';
import Item from './pages/Item';
import UpdateItem from './pages/admin/UpdateItem';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import CreateItem from './pages/admin/CreateItem';

const App = () => {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
            <Route path="/" exact component={Items} />
            <Route path="/products/:id" component={Item} />
            <Route path="/create-item" component={CreateItem}/>
            <Route path="/update-item/:id" component={UpdateItem}/>    
        </Switch>
        <Footer />
      </Router>
       
        
    </div>
  )
}
export default App
