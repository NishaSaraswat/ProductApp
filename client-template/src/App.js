import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Items from './pages/Items';
import Item from './pages/Item';
import ManageItems from './pages/admin/ManageItems';
import UpdateItem from './pages/admin/UpdateItem';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
            <Route path="/" exact component={Items} />
            <Route path="/products/:id" component={Item} />
            <Route path="/update-item/:id" component={UpdateItem}/>
            <Route path="/manage-products/:id" component={ManageItems}/>    
        </Switch>
        <Footer />
      </Router>
       
        
    </div>
  )
}
export default App
