import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Items from './pages/Items';
import Item from './pages/Item';
import ManageItems from './pages/admin/ManageItems';
import UpdateItem from './pages/admin/UpdateItem';
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import CreateItem from './pages/admin/CreateItem';
import { BodyWrapper } from './itemsStyles';

const App = () => {
  return (
    <div className="page-container">
      <Router>
        <Header/>
        <div className="content-container">
          <Switch>
              <Route path="/" exact component={Items} />
              <Route path="/products/:id" component={Item} />
              <Route path="/create-item" component={CreateItem}/>
              <Route path="/update-item/:id" component={UpdateItem}/>
              <Route path="/manage-products" component={ManageItems}/>
          </Switch>
        </div>
        <div className="footer-container"><Footer /></div>
      </Router>
       
        
    </div>
  )
}
export default App
