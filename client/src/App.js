import React from 'react';
import { Route } from 'react-router';
import Home from './pages/home';
import Cart from './pages/Cart';
import Profile from './pages/profile';
import About from './pages/about';


function App() {
  return<>
    <Route path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/profile" component={Profile} />
    <Route path="/about" component={About} />
  </>
}

export default App;
